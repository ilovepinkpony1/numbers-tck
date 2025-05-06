"use client";

import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "@/lib/firebase";

export default function Home() {
  const [number, setNumber] = useState(null);

  useEffect(() => {
    const numberRef = ref(database, "number");
    const unsubscribe = onValue(numberRef, (snapshot) => {
      const value = snapshot.val();
      setNumber(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-white text-[20vw] font-bold">
        {number !== null ? number : "..."}
      </div>
    </main>
  );
}
