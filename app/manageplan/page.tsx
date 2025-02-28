import SchematicComponent from "@/components/Schematic/SchematicComponenet";

function ManagePlan() {
  return (
    <div className="container mx-auto p-6 md:p-8 max-w-6xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
        Manage Your Plan
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Manage your subscription and billing details here.
      </p>
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
        <SchematicComponent componentId="cmpn_EeedBKhMBHy"  />
      </div>
    </div>
  );
}

export default ManagePlan;
