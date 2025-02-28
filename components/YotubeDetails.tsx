import { getVideoDetails } from "@/actions/getVideoDetails";
import { VideoDetails } from "@/types/type";
import { Calendar, Eye, MessageCircle, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function YoutubeDetails({ videoid }: { videoid: string }) {
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
      <div className="container bg-white rounded-xl p-4 animate-pulse m-2">
        <div className="flex flex-col @md:flex-row gap-8">
          {/* Thumbnail Skeleton */}
          <div className="flex-shrink-0 @md:w-[280px] bg-gray-200 h-80 rounded-xl"></div>

          {/* Details Skeleton */}
          <div className="flex-grow space-y-4">
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>

          {/* Channel Info Skeleton */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-lg p-3 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!video) return <div>Video Not Found</div>;

  return (
    <div className="container bg-white rounded-xl p-2">
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
          <h1 className="text-2xl @lg:text-3xl font-bold text-gray-900 leading-tight line-clamp-2">
            {video.title}
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={video.channel.thumbnail}
            alt={video.channel.title}
            width={48}
            height={48}
            className="w-10 h-10 @md:w-12 @md:h-12 rounded-full border-2 border-gray-100"
          />
          <div>
            <p className="text-base @md:text-lg font-semibold text-gray-900">
              {video.channel.title}
            </p>
            <p className="text-sm @md:text-base text-gray-600">
              {video.channel.subscribers} subscribers
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 @lg:grid-cols-4 gap-4 pt-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-600">Published</p>
          </div>
          <p className="font-medium text-gray-900">
            {new Date(video.publishedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Eye className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-600">Views</p>
          </div>
          <p className="font-medium text-gray-900">{video.views}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <ThumbsUp className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-600">Likes</p>
          </div>
          <p className="font-medium text-gray-900">{video.likes}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <MessageCircle className="w-4 h-4 text-gray-600" />
            <p className="text-sm text-gray-600">Comments</p>
          </div>
          <p className="font-medium text-gray-900">{video.comments}</p>
        </div>
      </div>
    </div>
  );
}

export default YoutubeDetails;
