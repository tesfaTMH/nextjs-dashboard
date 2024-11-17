"use client";
import React, { useEffect } from "react";

const error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <h2>Something went wrong!</h2>
      <button
        className="text-sm text-white mt-4 px-4 py-2 rounded-md bg-blue-500 transition-colors hover:bg-blue-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
};

export default error;
