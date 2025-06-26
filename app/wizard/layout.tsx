import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center p-12 md:p-0">
      {children}
    </div>
  );
};

export default layout;


