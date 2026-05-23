"use client";

import { Spinner } from "@heroui/spinner";

export default function FileLoadingState() {
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-lime-500/20 rounded-full blur-xl animate-pulse"></div>
        <Spinner size="lg" color="success" className="relative z-10" />
      </div>
      <p className="text-lime-400 text-lg font-medium">Loading your files...</p>
      <p className="text-lime-300/60 text-sm mt-2">This won&apos;t take long</p>
    </div>
  );
}
