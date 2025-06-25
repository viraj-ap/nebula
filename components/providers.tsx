// app/providers.tsx
"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode, useEffect, useState } from "react";

export function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <ThemeProvider
      attribute="class" 
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
