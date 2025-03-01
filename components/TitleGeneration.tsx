import { useSchematicEntitlement } from "@schematichq/schematic-react";
import Usage from "./Usage";
import { FeatureFlag } from "@/features/flags";
import { Copy } from "lucide-react";

function TitleGenerations({ videoid }: { videoid: string }) {
  const titles = []; // TODO: Pull from convex db

  const { value: isTitleGenerationEnabled } = useSchematicEntitlement(
    FeatureFlag.TITLE_GENERATIONS
  );

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-900 shadow-sm">
      <div className="min-w-52">
        <Usage featureFlag={FeatureFlag.TITLE_GENERATIONS} title="Titles" />
      </div>

      {/* No titles generated yet */}
      {!titles?.length && !!isTitleGenerationEnabled && (
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">
            No titles have been generated yet
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
            Generate titles to see them appear here
          </p>
        </div>
      )}

      {/* TODO: CONVEX */}
      {/* <div className="space-y-3 mt-4 max-h-[280px] overflow-y-auto">
        {titles?.map((title) => (
          <div
            key={title._id}
            className="group relative p-4 rounded-lg border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 hover:border-blue-100 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed">
                {title.title}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(title.title)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1.5 hover:bg-blue-100 dark:hover:bg-blue-700 rounded-md"
              title="Copy to clipboard"
            >
              <Copy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TitleGenerations;
