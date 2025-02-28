"use client";

import React, { useState } from "react";

import { Input } from "./ui/input";

import AnalyseButton from "./AnalyseButto";
import { analyseYoutubeVideo } from '@/actions/analyseYotubeVideo'
import Form from "next/form";

function URLinput() {
    const [error, setError] = useState("");
  
    const validateYouTubeUrl = (url: string) => {
      const regex =
        /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)(&[\w=-]*)*$/;
      return regex.test(url);
    };
    
  
    const handleValidate = async (formData: FormData) => {
      const url = formData.get("url") as string;
  
      if (!validateYouTubeUrl(url)) {
        setError("Please enter a valid YouTube URL.");
        return; // Stop submission
      }
  
      setError(""); // Clear error on valid input
      await analyseYoutubeVideo(formData);
    };
  
    return (
      <div className="mt-8  w-full max-w-xl bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg">
        <Form action={handleValidate} className="flex gap-4 flex-col lg:flex-row">
          <Input
            name="url"
            type="url"
            placeholder="Paste YouTube URL"
            className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-blue-200" />
          <AnalyseButton />
        </Form>
  
        {error && (
          <div className="mt-2 text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </div>
        )}
      </div>
    );
  }
  
  export default URLinput;

