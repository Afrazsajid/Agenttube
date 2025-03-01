"use client";

import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/type";
import { Calendar, Eye, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function YoutubeDetails({ videoid }: { videoid: string }) {
  const { theme } = useTheme();
  const [video, setVideo] = useState<VideoDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      const video = await getVideoDetails(videoid);
      setVideo(video);
      setLoading(false);
    };
    fetchVideoDetails();
  }, [videoid]);

  if (loading) {
    return (
      <div className="container bg-white dark:bg-gray-800 rounded-xl p-4 animate-pulse m-2">
        <div className="flex flex-col @md:flex-row gap-8">
          <div className="flex-shrink-0 @md:w-[280px] bg-gray-200 dark:bg-gray-700 h-80 rounded-xl"></div>
          <div className="flex-grow space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!video) return <div className="text-gray-900 dark:text-gray-100">Video Not Found</div>;

  return (
    <div className="container bg-white dark:bg-gray-900 rounded-xl p-2">
      <div className="flex flex-col @md:flex-row gap-8">
        <div className="flex-shrink-0 @md:w-[280px]">
          <Image
            src={video.thumbnail}
            alt={video.title}
            width={500}
            height={500}
            className="w-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        <div className="flex-grow space-y-4">
          <h1 className="text-2xl @lg:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight line-clamp-2">
            {video.title}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={video.channel.thumbnail}
            alt={video.channel.title}
            width={48}
            height={48}
            className="w-10 h-10 @md:w-12 @md:h-12 rounded-full border-2 border-gray-100 dark:border-gray-700"
          />
          <div>
            <p className="text-base @md:text-lg font-semibold text-gray-900 dark:text-gray-100">
              {video.channel.title}
            </p>
            <p className="text-sm @md:text-base text-gray-600 dark:text-gray-400">
              {video.channel.subscribers} subscribers
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
        {[
          { icon: <Calendar />, label: "Published", value: new Date(video.publishedAt).toLocaleDateString() },
          { icon: <Eye />, label: "Views", value: video.views },
          { icon: <ThumbsUp />, label: "Likes", value: video.likes },
          { icon: <MessageCircle />, label: "Comments", value: video.comments },
        ].map((item, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1 text-gray-600 dark:text-gray-400">
              {item.icon}
              <p className="text-sm">{item.label}</p>
            </div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoutubeDetails;
