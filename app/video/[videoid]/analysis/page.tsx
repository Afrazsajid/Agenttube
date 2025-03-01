"use client";

import React from "react";
import { useTheme } from "next-themes";
import Usage from "@/components/Usage";
import { FeatureFlag, featureFlagEvents } from "@/features/flags";
import YotubeDetails from "@/components/YotubeDetails";
import { useParams } from "next/navigation";
import ThumbnailGeneration from "@/components/ThumbnailGeneration";
import TitleGeneration from "@/components/TitleGeneration";
import Transcription from "@/components/Transcription";
import AiAgentChat from "@/components/AiAgentChat";



function AnalysisPage() {

  const { theme } = useTheme();
  const params = useParams<{videoid:string}>()
  const videoid= params.videoid

  return (
    <div
      className={`container mx-auto px-4 md:px-9 ${
        theme === "dark" ? "" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div
          className={`order-2 lg:order-1 flex flex-col gap-4 p-0.5 lg:p-4 border-gray-200 ${
            theme === "dark"
              ? "bg-[#1E293B] border-gray-600"
              : "bg-white border-gray-200"
          } lg:border-r`}
        >
          {/* Analysis Section */}
          <div>
            <Usage
              featureFlag={FeatureFlag.ANALYSE_VIDEO}
              title="Analyse Video"
            />
          </div>

          <YotubeDetails videoid={videoid} />
          <ThumbnailGeneration videoid={videoid}/>
          <TitleGeneration videoid={videoid}/>
          <Transcription videoid={videoid}/>


        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 h-[500px] lg:h-[calc(100vh-6rem)] dark:bg-gradient-to-b from-[#0F172A] to-[#1E293B] dark:text-white ">
          {/* AI Agent Chat Section */}
          <AiAgentChat videoid={videoid}/>
          <p className="">Chat</p>
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;
