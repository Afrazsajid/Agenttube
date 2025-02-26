// import { Card, CardContent } from "@/components/ui/card";
// import { FaVideo, FaBrain, FaChartLine } from "react-icons/fa";

// const HowItWorks = () => {
//   return (
//     <section className="py-12 bg-gray-50 dark:bg-gray-900">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
//           How It Works
//         </h2>
//         <p className="mt-2 text-gray-600 dark:text-gray-300">
//           Enhance your video content in just three simple steps.
//         </p>
//       </div>

//       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
//         <Card className="flex flex-col items-center text-center p-6 shadow-lg">
//           <FaVideo className="text-blue-500 text-4xl mb-4" />
//           <h3 className="text-xl font-semibold">Connect Your Content</h3>
//           <CardContent className="text-gray-600 dark:text-gray-300">
//             Share your YouTube video URL and let your AI agent get to work.
//           </CardContent>
//         </Card>

//         <Card className="flex flex-col items-center text-center p-6 shadow-lg">
//           <FaBrain className="text-blue-500 text-4xl mb-4" />
//           <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
//           <CardContent className="text-gray-600 dark:text-gray-300">
//             Your personal AI agent examines every aspect of your content.
//           </CardContent>
//         </Card>

//         <Card className="flex flex-col items-center text-center p-6 shadow-lg">
//           <FaChartLine className="text-blue-500 text-4xl mb-4" />
//           <h3 className="text-xl font-semibold">Receive Intelligence</h3>
//           <CardContent className="text-gray-600 dark:text-gray-300">
//             Get insights, recommendations, and AI-generated enhancements.
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import { FaVideo, FaBrain, FaChartLine } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Enhance your video content effortlessly in three simple steps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
          <FaVideo className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Connect Your Content</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Share your YouTube video URL and let your AI agent get to work.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md">
          <FaBrain className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">AI-Powered Analysis</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Your personal AI agent examines every aspect of your content.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md">
          <FaChartLine className="text-blue-600 text-5xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Receive Intelligence</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-md">
            Get insights, recommendations, and AI-generated enhancements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

