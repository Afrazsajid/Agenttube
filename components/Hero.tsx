
import Agentpulse from "./Agentpuls";
import URLinput from "./URLinput";


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
      <URLinput/>
      
    </section>
  );
}













// // animated part
// "use client"

// import { motion } from "framer-motion";

// import Agentpulse from "./Agentpuls";
// import URLinput from "./URLinput";

// export default function Hero() {
//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden min-h-screen"
//     >
//       {/* Background Wave Effect */}
//       <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent -z-10"></div>
//       <div className="absolute -top-20 w-full h-64 bg-blue-500/10 blur-3xl rounded-full -z-10"></div>

//       {/* Animated Pulse */}
//       <Agentpulse />

//       {/* Heading */}
//       <motion.h1
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-4xl md:text-6xl font-extrabold leading-tight mt-6"
//       >
//         Your AI-Powered{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
//           Video Analyst
//         </span>
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
//         className="text-gray-500 dark:text-gray-300 max-w-2xl mt-4 text-lg"
//       >
//         AI-driven insights, transcription, and powerful content analysis.
//         Elevate your YouTube experience effortlessly.
//       </motion.p>

//       {/* Input + Button with Glassmorphism */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
//       >
//         <URLinput />
//       </motion.div>
//     </motion.section>
//   );
// }
