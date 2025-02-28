"use server"
import {google} from "googleapis"
import { VideoDetails } from "@/types/type"



const yotube = google.youtube({
    version:"v3",
    auth:process.env.YOTUBE_API_KEY,
})

export async function getVideoDetails(videoid:string){
    console.log("fetching details from youtbe | getVideoDetails.ts:",videoid)
    try {
        const videoResponse = await yotube.videos.list({
            part:["statistics","snippet"],
            id:[videoid]
        });
        const videoDetails = videoResponse.data.items?.[0]
        // const videoDetails = videoResponse.data.items?[0]

        if (!videoDetails){
            throw new Error("video is not found")
        }

        const ChannelResponse = await  yotube.channels.list({
            part:["snippet","statistics"],
            id:[videoDetails.snippet?.channelId|| ""],
            key:process.env.YOTUBE_API_KEY,
        })

        const ChannelDetails = ChannelResponse.data.items?.[0]
        console.log("video details fetched")

        const video:VideoDetails = {
            // Video Info
            title: videoDetails.snippet?.title || "Unknown Title",
            thumbnail:
              videoDetails.snippet?.thumbnails?.maxres?.url ||
              videoDetails.snippet?.thumbnails?.high?.url ||
              videoDetails.snippet?.thumbnails?.default?.url ||
              "",
            publishedAt: videoDetails.snippet?.publishedAt || new Date().toISOString(),

            views:videoDetails.statistics?.viewCount||"0",
            
            likes:videoDetails.statistics?.likeCount||"Not Available",
            comments: videoDetails.statistics?.commentCount|| "Not Avaliable",


             // Channel Info
      channel: {
        title: videoDetails.snippet?.channelTitle || "Unknown Channel",
        thumbnail: ChannelDetails?.snippet?.thumbnails?.default?.url || "",
        subscribers: ChannelDetails?.statistics?.subscriberCount || "0",
      },

          };
          return video

        

    } catch (error){
        console.error("error in fecthcing details |getVideoDetails.ts ",error)
        return null
    }
}