import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Agentpulse from "./Agentpuls";


export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden min-h-screen">
      {/* Background Wave Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent -z-10"></div>
      <div className="absolute -top-20 w-full h-64 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>

      {/* Animated Pulse */}

   
        <Agentpulse />
  

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
        Your AI-Powered{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
          Video Analyst
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 dark:text-gray-300 max-w-2xl mt-4 text-lg">
        AI-driven insights, transcription, and powerful content analysis. 
        Elevate your YouTube experience effortlessly.
      </p>

      {/* Input + Button with Glassmorphism */}
      <div className="mt-8 flex w-full max-w-xl bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg gap-4 flex-col lg:flex-row">
        <Input 
          type="text"
          placeholder="Paste YouTube URL"
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-blue-200"
        />
        <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 transition-transform px-6 py-3 text-white font-semibold rounded-lg">
          Analyze
        </Button>
      </div>
    </section>
  );
}
