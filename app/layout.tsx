import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agentube - AI Video Analysis & Content Creation Tools",
  description:
    "AI-powered video analysis platform for creators. Generate thumbnails, transcriptions, SEO-friendly titles, shot scripts, and more with intelligent automation.",
    icons: {
      icon: [
             { url: "/icon.png", media: "(prefers-color-scheme: light)" },
             { url: "/icon.png", media: "(prefers-color-scheme: dark)" },
           ],
    },
  keywords: [
    "AI video analysis",
    "video insights",
    "content creation tools",
    "AI-generated thumbnails",
    "smart transcription",
    "SEO video titles",
    "YouTube growth",
    "viral video strategy",
    "AI-powered content",
  ],
  
  openGraph: {
    title: "Agentube - AI Video Analysis & Content Creation Tools",
    description:
      "Enhance your content with AI: deep video analysis, smart transcriptions, auto-generated thumbnails, SEO-friendly titles, and AI-powered brainstorming.",
    url: "https://aitube-chi.vercel.app/", // Replace with actual URL
    siteName: "Agentube",
    images: [
      {
        url: "/opengraph1.jpg", // Replace with actual Open Graph image URL
        width: 1200,
        height: 630,
        alt: "Agentube AI Video Analysis & Content Creation Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentube - AI Video Analysis & Content Creation Tools",
    description:
      "Transform your videos with AI: auto-generated thumbnails, smart transcriptions, SEO titles, shot scripts, and content insights.",
    images: ["/opengraph1.jpg"], // Replace with actual Twitter card image URL
  },
  alternates: {
    canonical: "https://aitube-chi.vercel.app/", // Helps with SEO
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "og:locale": "en_US",
    "og:site_type": "website",
    "og:updated_time": new Date().toISOString(), // Auto-updates timestamp
  },
};






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
          
        <ClientWrapper>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <Header/>
          <main>
          {children}
          </main>
          </ThemeProvider>
          </ClientWrapper>
        
      
        
      </body>
    </html>
  );
}
