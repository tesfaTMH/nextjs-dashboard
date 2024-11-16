import React, { ReactNode } from "react";
import SideNav from "../ui/dashboard/sidenav";

export const experimental_ppr = true;

const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden h-screen">
      <div className="flex-none w-full md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:p-12 md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default LayoutDashboard;
