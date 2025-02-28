"use server";

import { getIdFromUrl } from "@/lib/getIdFromUrl";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function analyseYoutubeVideo(formData: FormData) {
    const { userId } = await auth.protect(); 
  const url = formData.get("url")?.toString();
  console.log(url)
  if (!url) return;

  const videoId = getIdFromUrl(url) // TODO: Fix this

  if (!videoId) return;

  // Redirect to the new post
  redirect(`/video/${videoId}/analysis`);
}
