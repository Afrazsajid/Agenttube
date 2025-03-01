import React from "react";
import { useChat } from "@ai-sdk/react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown"


function AiAgentChat({ videoid }: { videoid: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    maxSteps: 5,
    body: {
      videoid,
    },
  });

  return (
    <div className="flex flex-col h-full dark:text-white">
      <div className="hidden lg:block px-4 pb-3 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">AI Agent</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-gray-700 dark:text-white">
                  Welcome to AI Agent Chat
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Ask any question about your video!
                </p>
              </div>
            </div>
          )}

          {messages.map((m) => (
            <div key={m.id}>
              {/* user message */}
              <div className="prose  max-w-none "><ReactMarkdown>{m.content}</ReactMarkdown></div>
              



              
            </div>
          ))}
        </div>
      </div>

      {/* Input form */}
<div className="border-t border-gray-100 p-4 ">
  <div className="space-y-3">
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
      value={input}
      onChange={handleInputChange}
        className="flex-1 px-4 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="text"
        placeholder="Enter a question..."
      />
      <Button type="submit"
      
        className="px-4 bg-blue-500 text-white text-sm rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </Button>
    </form>
  </div>
</div>




    </div>
  );
}

export default AiAgentChat;
