'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Contract Project</h1>
      <h2 className="text-2xl">Login Page</h2>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/ownerLogin")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Owner Login
        </button>
        <button
          onClick={() => navigate("/tenantLogin")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Tenant Login
        </button>
      </div>
    </div>
  );
}