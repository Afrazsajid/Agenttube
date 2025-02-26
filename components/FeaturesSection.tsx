// import { FaBrain, FaClosedCaptioning, FaImage, FaCommentDots, FaVideo, FaPenNib } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaBrain className="text-blue-500 text-2xl" />,
//     title: "AI Analysis",
//     description: "Get deep insights into your video content with our advanced AI analysis. Understand viewer engagement and content quality.",
//   },
//   {
//     icon: <FaClosedCaptioning className="text-green-500 text-2xl" />,
//     title: "Smart Transcription",
//     description: "Get accurate transcriptions of your videos. Perfect for creating subtitles, blog posts, or repurposing content.",
//   },
//   {
//     icon: <FaImage className="text-purple-500 text-2xl" />,
//     title: "Thumbnail Generation",
//     description: "Generate eye-catching thumbnails using AI. Boost your click-through rates with compelling visuals.",
//   },
//   {
//     icon: <FaPenNib className="text-yellow-500 text-2xl" />,
//     title: "Title Generation",
//     description: "Create attention-grabbing, SEO-optimized titles for your videos using AI. Maximize views with engaging titles.",
//   },
//   {
//     icon: <FaVideo className="text-red-500 text-2xl" />,
//     title: "Shot Script",
//     description: "Get detailed, step-by-step instructions to recreate viral videos. Learn shooting techniques, angles, and editing tips.",
//   },
//   {
//     icon: <FaCommentDots className="text-orange-500 text-2xl" />,
//     title: "Discuss with Your AI Agent",
//     description: "Engage in deep conversations about content strategy, brainstorm ideas, and unlock creative possibilities.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-12 bg-white dark:bg-gray-900">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
//           Powerful Features for Content Creators
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-start">
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
//               <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { FaBrain, FaClosedCaptioning, FaImage, FaCommentDots, FaVideo, FaPenNib } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-blue-500 text-3xl" />,
    title: "AI Analysis",
    description: "Deep insights into video content using AI. Understand engagement & quality like never before.",
    color: "from-blue-500 to-blue-400",
  },
  {
    icon: <FaClosedCaptioning className="text-green-500 text-3xl" />,
    title: "Smart Transcription",
    description: "Accurate AI-generated subtitles & transcriptions for repurposing content.",
    color: "from-green-500 to-green-400",
  },
  {
    icon: <FaImage className="text-purple-500 text-3xl" />,
    title: "Thumbnail Generation",
    description: "Eye-catching AI-generated thumbnails to increase click-through rates.",
    color: "from-purple-500 to-purple-400",
  },
  {
    icon: <FaPenNib className="text-yellow-500 text-3xl" />,
    title: "Title Generation",
    description: "Generate SEO-friendly, attention-grabbing titles with AI.",
    color: "from-yellow-500 to-yellow-400",
  },
  {
    icon: <FaVideo className="text-red-500 text-3xl" />,
    title: "Shot Script",
    description: "Step-by-step guidance for recreating viral videos with AI assistance.",
    color: "from-red-500 to-red-400",
  },
  {
    icon: <FaCommentDots className="text-orange-500 text-3xl" />,
    title: "AI-Powered Discussion",
    description: "Brainstorm ideas and refine your content strategy with an AI assistant.",
    color: "from-orange-500 to-orange-400",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Powerful Features for Creators
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden`}
            >
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.color}`} />
              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

