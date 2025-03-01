// import { NextResponse } from "next/server";
// import {createAnthropic} from "@ai-sdk/anthropic"
// import {streamText,tool} from "ai"
// export async function POST(req: Request) {
//     const {messages,videoid}= await req.json()
//   console.log(messages,videoid);

//   const anthropic = createAnthropic({
//     apiKey:process.env.CLAUDE_API_KEY,
//     headers:{
//         "anthropic-beta":"token-efficient-tools-2025-02-19"
//     }
//   })

//   console.log("created anthropic")
//   const model= anthropic("claude-3-7-sonnet-20250219")
//   console.log("initiilaize model")

//   const result=streamText({
//     model,
//     messages,

//   })

//   console.log(result.toDataStreamResponse())
//   return result.toDataStreamResponse()

// //   return NextResponse.json({ message: "hi.." });
// }

// refrence code
// import { NextRequest, NextResponse } from "next/server";
// import { createGoogleGenerativeAI } from "@ai-sdk/google";
// import { streamText, tool } from "ai";
// import { currentUser } from "@clerk/nextjs/server";
// import { getVideoDetails } from "@/actions/get-video-details";
// import { fetchTranscript } from "@/tools/fetch-transcript";
// import { z } from "zod";
// import { generateTitle } from "@/tools/generate-title";
// const google = createGoogleGenerativeAI({
// apiKey: process.env.GEMINI_API_KEY,
// });
// export const model = google("gemini-2.0-flash");
// export async function POST(req: NextRequest) {
// const { messages, videoId } = await req.json();
// const user = await currentUser();
// if (!user) {
// return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
// }
// const videoDetails = await getVideoDetails(videoId);
// const systemMessage = `You are an AI agent ready to accept questions from the user about ONE specific video. The video ID in question is ${videoId} but you'll refer to this as ${
// videoDetails?.title || "Selected Video"
// }. Use emojis to make the conversation more engaging. if an error occurs, explain it to the user and ask them to try again later. If the error suggest the user upgrade, explain that they must upgrade to see the feature, tell them to go to 'Manage Plan' in the header and upgrade. If any tool is used, analyse the response and if it contains a cache, explain that the transcript is cached because they previously transcribed the video saving the user a token - use words like database instead of cache to make it more easy to understand. Format for notion.`;
// const result = streamText({
// model,
// messages: [
// {
// role: "system",
// content: systemMessage,
// },
// ...messages,
// ],
// tools: {
// fetchTranscript,
// generateTitle,
// getVideoDetails: tool({
// description: "get the details of a youtube channel",
// parameters: z.object({
// videoId: z.string().describe("the video ID to get the details for"),
// }),
// execute: async ({ videoId }) => {
// const videoDetails = await getVideoDetails(videoId);
// return { videoDetails };
// },
// }),
// },
// });
// return result.toDataStreamResponse();
// }

// for gemeni
import { NextResponse } from "next/server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
import { currentUser } from "@clerk/nextjs/server";
import { getVideoDetails } from "@/actions/getVideoDetails";
import fecthTranscript from "@/tools/fetch-transcript";
import ReactMarkDown from "react-markdown"

export async function POST(req: Request) {
  const user = await currentUser();
  

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { messages, videoid } = await req.json();

  const videoDetails = await getVideoDetails(videoid);
  

  const systemMessage = `You are an AI agent made by syed afraz ready to accept questions from the user about ONE specific video. The video ID in question is ${videoid} but you'll refer to this as ${
    videoDetails?.title || "Selected Video"
  }. Use emojis to make the conversation more engaging. if an error occurs, explain it to the user and ask them to try again later. If the error suggest the user upgrade, explain that they must upgrade to see the feature, tell them to go to 'Manage Plan' in the header and upgrade. If any tool is used, analyse the response and if it contains a cache, explain that the transcript is cached because they previously transcribed the video saving the user a token - use words like database instead of cache to make it more easy to understand. Format for notion. give nice reposne with formmating and emojis  and detailed reponse and sturctured with headings`;
  console.log(messages, videoid);

  // Initialize Gemini AI (Google AI SDK)
  const googleAI = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY, // Ensure this is set in your .env file
  });

  console.log("Created Google AI instance");

  const model = googleAI("gemini-2.0-flash"); // Use the appropriate Gemini model
  console.log("Initialized model");

  const result = streamText({
    model,
    messages:[
        {
            role:"system",
            content:systemMessage,
        },...messages
    ],
    tools:{
        fecthTranscript:fecthTranscript
    }
  });

  console.log(result.toDataStreamResponse());
  return result.toDataStreamResponse();
}
