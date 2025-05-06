"use client";

import { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Change() {
  const [number, setNumber] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const numberRef = ref(database, "number");
    await set(numberRef, Number(number));

    alert("ЗБЕРЕЖЕНО");
  };

  return (
    <main className="min-h-screen bg-white p-4 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Введіть число"
          required
        />
        <button
          type="submit"
          className="w-full p-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          ЗБЕРЕГТИ
        </button>
      </form>
    </main>
  );
}
