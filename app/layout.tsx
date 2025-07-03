import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nebula",
  description: "A budgeting app for the modern web",
  openGraph: {
    title: "Nebula - A budgeting app for the modern web",
    description: "A full custom modern web app for budget tracking",
    url: "https://nebula.virajpawar.xyz/",
    siteName: "Nebula",
    images: [
      {
        url: "https://nebula.virajpawar.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "Nebula App OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebula - A budgeting app for the modern web",
    description: "A full custom modern web app for budget tracking",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ cssLayerName: "clerk" }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster richColors position="bottom-right" />
          <header />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
