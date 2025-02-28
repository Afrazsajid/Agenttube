// "use client";

// import { FeatureFlag } from "@/features/flags";
// import { Progress } from "@radix-ui/react-progress";
// import { progressColorMap } from "@schematichq/schematic-components";
// import {
//   useSchematicEntitlement,
//   useSchematicIsPending,
// } from "@schematichq/schematic-react";
// import { Percent } from "lucide-react";

// function Usage({
//   featureFlag,
//   title,
// }: {
//   featureFlag: FeatureFlag;
//   title: string;
// }) {
//   const isPending = useSchematicIsPending();
//   const {
//     featureAllocation,
//     featureUsage,
//     value: isFeatureEnabled,
//   } = useSchematicEntitlement(featureFlag);

//   const hasUsedAllTokens =
//     featureUsage && featureAllocation && featureUsage >= featureAllocation;

//   if (isPending) {
//     return <div className="text-gray-500 text-center py-4">Loaidng...</div>;
//   }

//   if (hasUsedAllTokens) {
//     return (
//       <div className=" p-6 border-red-100 border shadow-sm bg-white rounded-2xl  text-gray-500 text-center py-4">
//         <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
//         <div className="flex justify-between items-center mb-4">
//           <div className="px-4 py-2 bg-red-50 rounded-lg">
//             <span className="font-medium text-red-700">{featureUsage}</span>
//             <span className="text-red-700 mx-2">/</span>
//             <span className="font-medium text-red-700">
//               {featureAllocation}
//             </span>
//           </div>
//         </div>
//         <div className="relative">
//           <Progress
//             className="h-3 rounded-full bg-gray-100 [&>*]:bg-red-600"
//             value={100}
//             max={100}
//           ></Progress>
//           <p className="text-sm text-red-600 mt-2">
//             You have used all available tokens. Please upgrade your plan to
//             continue using this feature.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (!isFeatureEnabled) {
//     return (
//       <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 opacity-50">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
//         </div>
//         <div className="px-4 py-2 bg-gray-50 rounded-lg">
//           <span className="text-gray-500">Feature Disabled</span>
//         </div>
//         <div className="relative">
//           <Progress value={0} className="h-3 rounded-full bg-gray-100" />
//           <p className="text-sm text-gray-500 mt-2">
//             Upgrade to use this feature
//           </p>
//         </div>
//       </div>
//     );
//   }

//   const progress = ((featureUsage || 0) / (featureAllocation || 1)) * 100;

//   const getProgressColor = (percent: number) => {
//     if (percent >= 80) return "[&>*]:bg-red-600";
//     if (percent >= 50) return "[&>*]:bg-yellow-500";
//     return "[&>*]:bg-green-500";
//   };
//   const progrescolor = getProgressColor(progress);

//   return (
//     <>

//         <div className="flex justify-between items-center mb-4 gap-4 p-4 bg-white shadow rounded-lg">
//           {/* Title */}
//           <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    
//           {/* Feature Usage */}
//           <div className="px-4 py-2 bg-gray-50 rounded-lg">
//             <span className="font-medium text-gray-700">{featureUsage}</span>
//             <span className="text-gray-400 mx-2">/</span>
//             <span className="font-medium text-gray-700">{featureAllocation}</span>
//           </div>
    
//           {/* Progress Bar */}
//           </div>
//           <div className="relative w-full">
         
//             <Progress value={progress} className={`h-3 rounded-full bg-gray-100 ${progrescolor}`} />
            
    
//             {progress >= 100 ? (
//               <p className="text-sm text-red-600 mt-2">You have reached your usage limit</p>
//             ) : progress >= 80 ? (
//               <p className="text-sm text-yellow-500 mt-2">Warning: You are approaching your usage limit</p>
//             ) : null}
//           </div>
//           </>
//       );
//   ;
// }

// export default Usage;













// dark mode code
"use client";

import { FeatureFlag } from "@/features/flags";
import { Progress } from "@radix-ui/react-progress";
import {
  useSchematicEntitlement,
  useSchematicIsPending,
} from "@schematichq/schematic-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils"; // Utility function for conditional classes

function Usage({ featureFlag, title }: { featureFlag: FeatureFlag; title: string }) {
  const isPending = useSchematicIsPending();
  const { theme } = useTheme();
  const {
    featureAllocation,
    featureUsage,
    value: isFeatureEnabled,
  } = useSchematicEntitlement(featureFlag);

  const hasUsedAllTokens = featureUsage && featureAllocation && featureUsage >= featureAllocation;

  // Define dynamic progress colors
  const getProgressColor = (percent: number) => {
    if (percent >= 80) return "[&>*]:bg-red-600";
    if (percent >= 50) return "[&>*]:bg-yellow-500";
    return "[&>*]:bg-green-500";
  };
  
  const progress = ((featureUsage || 0) / (featureAllocation || 1)) * 100;
  const progressColor = getProgressColor(progress);

  if (isPending) {
    return <div className="text-gray-100 text-center py-4">Loading...</div>;
  }

  if (hasUsedAllTokens) {
    return (
      <div className="p-6 border border-red-500 shadow-md rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-center">
        <h2 className="text-xl font-semibold text-red-700 dark:text-red-400">{title}</h2>
        <div className="flex justify-center items-center my-4">
          <div className="px-4 py-2 bg-red-50 dark:bg-red-900 rounded-lg">
            <span className="font-medium text-red-700 dark:text-red-300">{featureUsage}</span>
            <span className="text-red-600 mx-2">/</span>
            <span className="font-medium text-red-700 dark:text-red-300">{featureAllocation}</span>
          </div>
        </div>
        <div className="relative">
          <Progress className="h-3 rounded-full bg-gray-300 dark:bg-gray-700" value={100} />
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">
            You have used all available tokens. Please upgrade your plan to continue.
          </p>
        </div>
      </div>
    );
  }

  if (!isFeatureEnabled) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 p-4 opacity-60">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">{title}</h2>
        <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-500 dark:text-gray-400">Feature Disabled</span>
        </div>
        <Progress value={0} className="h-3 rounded-full bg-gray-300 dark:bg-gray-700" />
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Upgrade to use this feature.</p>
      </div>
    );
  }

  return (
    <div className="p-6 border border-gray-300 dark:border-gray-700 shadow-md rounded-2xl bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        <div className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
          <span className="font-medium text-gray-700 dark:text-gray-300">{featureUsage}</span>
          <span className="text-gray-500 mx-2 dark:text-gray-400">/</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{featureAllocation}</span>
        </div>
      </div>

      <div className="relative">
        <Progress value={progress} className={`h-3 rounded-full bg-gray-300 dark:bg-gray-700 ${progressColor}`} />
        {progress >= 100 ? (
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">You have reached your usage limit.</p>
        ) : progress >= 80 ? (
          <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">Warning: You are approaching your limit.</p>
        ) : null}
      </div>
    </div>
  );
}

export default Usage;

