'use client'
import { Suspense } from "react";
import Counter from "@/components/counter"; // Ensure the correct import path

export default function CounterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="flex items-center justify-center h-screen">
      <Counter />
    </div>
    </Suspense>
  );
}
