"use server";

import { api } from "@/convex/_generated/api";
import { FeatureFlag, featureFlagEvents } from "@/features/flags";
import { client } from "@/lib/schematic";
import { currentUser } from "@clerk/nextjs/server";
import { error } from "console";
import { ConvexHttpClient } from "convex/browser";
import { Innertube } from "youtubei.js";


const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export interface TranscriptEntry{
    text:string;
    timestamp:string;
}

const yotube = await Innertube.create({
    lang:"en",
    location:"US",
    retrieve_player:false,

})
 function formatTimeStamp(start_ms:number):string{
    const miniutes = Math.floor(start_ms/6000)
    const seconds = Math.floor((start_ms%6000)/1000);
    return `${miniutes}:${seconds.toString().padStart(2,"g")}`

 }

async function fecthTranscript(videoid:string):Promise<TranscriptEntry[]>{
    try{
        const info = await yotube.getInfo(videoid)
        const transcriptData = await info.getTranscript()
        const transcript:TranscriptEntry[]= transcriptData.transcript.content?.body?.initial_segments.map((segment)=>({
            text:segment.snippet.text?? "N/A",
            timestamp:formatTimeStamp(Number(segment.start_ms))



        })) ?? [];

        return transcript


    } catch (error){
        console.error("Erros in fetching transcription: ",error)
        throw error
    }


}

 export async function getTranscript(videoid:string) {
  console.log(`🚀 Starting transcript retrieval for video ID: ${videoid}`);
  const user = await currentUser();
  console.log(
    `👤 User authentication check: ${user?.id ? "Successful" : "Failed"}`
  );

  if (!user?.id) {
    console.log("❌ Error: User not found");
    throw new Error("User not found");
  }

  console.log(
    `🔍 Checking database for existing transcript for video: ${videoid}`
  );
  const existingTranscript = await convex.query(
    api.transcript.getTranscriptByVideoId,
    { videoId:videoid, userId: user.id }
  );

  if (existingTranscript) {
    console.log(`✅ Transcript found in database for video: ${videoid}`);
    console.log(
      `📊 Transcript length: ${existingTranscript.transcript.length} segments`
    );
    return {
      cache:
        "This video has already been transcribed - Accessing cached transcript instead of using a token",
      transcript: existingTranscript.transcript,
    };
  }

  console.log(
    `🔄 No existing transcript found. Fetching new transcript from YouTube...`
  );
  try {
    console.log(`📥 Calling YouTube API for video: ${videoid}`);
    const transcript = await fecthTranscript(videoid);
    console.log(
      `📝 Successfully retrieved transcript with ${transcript.length} segments`
    );

    console.log(`💾 Storing transcript in database...`);
    // Store transcript in database
    await convex.mutation(api.transcript.storeTranscript, {
      videoId:videoid,
      userId: user.id,
      transcript,
    });
    console.log(`✅ Transcript successfully stored in database`);

    console.log(`📊 Tracking transcription event with Schematic`);
    await client.track({
      event: featureFlagEvents[FeatureFlag.TRANSCRIPTION].event,
      company: {
        id: user.id,
      },
      user: {
        id: user.id,
      },
    });
    console.log(`✅ Event tracking complete`);

    return {
      transcript,
      cache:
        "This video was transcribed using a token, the transcript is now saved in the database",
    };
  } catch (error) {
    console.error("❌ Error fetching transcript:", error);
    console.log(`⚠️ Returning empty transcript due to error`);
    return {
      transcript: [],
      cache: "Error fetching transcript, please try again later",
    };
  }
}
