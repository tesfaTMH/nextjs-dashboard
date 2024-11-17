import React from "react";
import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";

const page = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="flex flex-col mx-auto w-full max-w-[400px] space-y-2.5 p-4 md:mt-32 relative">
        <div className="flex items-end w-full h-20 md:h-36 rounded-lg bg-blue-500 p-3">
          <div className="w-32 md:w-36 text-white">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default page;
