"use client";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton>
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <div>
        <ModeToggle />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-10 cursor-pointer">
        <Button className="cursor-pointer" onClick={() => redirect("/dashboard")} variant={"secondary"}>
          Dashboard
        </Button>
        <Button className="cursor-pointer" onClick={() => redirect("/wizard")} variant={"secondary"}>
          Wizard
        </Button>
        <Button className="cursor-pointer" onClick={() => redirect("/transactions")} variant={"secondary"}>
          Transactions
        </Button>
        <Button className="cursor-pointer" onClick={() => redirect("/manage")} variant={"secondary"}>
          Manage
        </Button>
        
        
      </div>
    </div>
  );
}
