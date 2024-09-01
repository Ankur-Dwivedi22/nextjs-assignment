"use client";

import { useRouter } from "next/navigation";

const OwnerLogin = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => navigate("/createContract")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Contract
        </button>
        <button
          onClick={() => navigate("/manageContract")}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Manage Contracts
        </button>
      </div>
    </div>
  );
};

export default OwnerLogin;