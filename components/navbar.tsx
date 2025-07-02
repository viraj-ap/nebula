"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center w-full sticky top-0 z-50 px-2 py-2 mt-8">
      <div
        className={`flex justify-between items-center transition-all duration-200 ${
          isScrolled
            ? "w-[90vw] p-2 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-700 shadow-md rounded-lg"
            : "w-[90vw] p-2 rounded-lg bg-white/80 dark:bg-black/80 backdrop-blur-md"
        }`}
      >
        {/* Left: Logo */}
        <div className="px-6 flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Center: Nav Items (Desktop only) */}
        <div className="hidden md:flex px-6">
          <ul className="flex gap-6 lg:gap-10 font-semibold text-sm my-6 text-gray-900 dark:text-white">
            {["Features", "FAQs", "Contact"].map((id) => (
              <li
                key={id}
                onClick={() => handleScrollTo(id)}
                className="cursor-pointer hover:underline hover:-translate-y-1 transition-all duration-300"
              >
                {id.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Auth & Theme Toggle */}
        <div className="px-6 hidden md:flex items-center gap-2">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="default" className="text-xs px-4 py-1">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="default" className="text-xs px-4 py-1">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <ModeToggle />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden px-6 flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 mx-4 bg-white/90 dark:bg-black/90 backdrop-blur-md mt-2 py-4 px-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <ul className="flex flex-col gap-4 font-semibold text-sm text-gray-900 dark:text-white">
            {["Features", "FAQs", "Contact"].map((id) => (
              <li
                key={id}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleScrollTo(id);
                }}
                className="cursor-pointer hover:underline transition-all duration-300"
              >
                {id.toUpperCase()}
              </li>
            ))}
          </ul>

          {/* Auth buttons & theme toggle in mobile menu */}
          <div className="mt-4 flex flex-col gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  onClick={handleSignIn}
                  variant="default"
                  className="text-xs w-full"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button
                  onClick={handleSignIn}
                  variant="default"
                  className="text-xs w-full"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="pt-2 flex justify-end">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
