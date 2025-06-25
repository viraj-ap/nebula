import NavbarInside from "@/components/navbar-inside";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen flex-col w-full">
      <NavbarInside />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default layout;
