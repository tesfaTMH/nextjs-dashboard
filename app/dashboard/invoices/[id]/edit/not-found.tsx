import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full">
      <FaceFrownIcon className="text-gray-400 w-10" />
      <h2 className="font-semibold text-xl">404 Not Found</h2>
      <p>Could not find the requested invoice</p>

      <Link
        href={"/dashboard/invoices"}
        className="text-sm text-white mt-4 px-4 py-2 rounded-md bg-blue-500 transition-colors hover:bg-blue-300"
      >
        Go Back
      </Link>
    </main>
  );
};

export default NotFound;
