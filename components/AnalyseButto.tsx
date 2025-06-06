import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const { pending } = useFormStatus();
  return (
    <Button
    disabled={pending}
    className={`px-6 py-2 text-white bg-blue-600 rounded-lg 
      hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
      focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed 
      transition-all duration-200 font-medium`}>
      {pending? "Analyzing...":"Analyze"}
    
    </Button>
  );
}

export default AnalyseButton;
