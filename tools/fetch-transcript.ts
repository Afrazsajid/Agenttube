import { getTranscript } from "@/actions/getTranscript"
import {tool} from "ai"

import  {z} from "zod"

const fecthTranscript=tool({
    description:"fecth the transcription of a yotube video in segments",
    parameters: z.object({
        videoid:z.string().describe("The Video ID to Fecth The transcription")
    }),
    execute:async ({videoid})=>{
        const transcription = await getTranscript(videoid)
        return {
            transcription:transcription.transcript,
            cache:transcription.cache
            
        }

    }

})

export default fecthTranscript