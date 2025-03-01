"use server"

import { currentUser } from "@clerk/nextjs/server"

import { error } from "console";
import {Innertube} from "youtubei.js"

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


    } catch{
        console.error("Erros in fetching transcription: ",error)
        throw error
    }


}

 export async function getTranscript(videoid:string){
    const user = await currentUser()
    if (!user?.id){
        throw new Error("USER IS NOT FOUND  | gettranscript")
    }

    const transcript = await fecthTranscript(videoid);
    console.log(transcript)
    return {
        transcript,
        cache:"This is Not Cached"
    }



 }