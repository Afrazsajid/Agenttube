import { getVideoDetails } from '@/actions/getVideoDetails';
import { VideoDetails } from '@/types/type';
import { google } from 'googleapis';
import React, { useEffect, useState } from 'react'


function YotubeDetails({videoid}:{videoid:string;}) {
     const [video , setVideo]= useState<VideoDetails| null>()

     useEffect(()=>{
        const fetchVideoDetailes= async()=>{
            const video = await getVideoDetails(videoid)
            
            setVideo(video)
            console.log(video)
        }
        fetchVideoDetailes()

     },[videoid])

     if (!video) return <div>Video Not Found</div>

  return (
    <div>{videoid}</div>
  )
}

export default YotubeDetails