import { ModeToggle } from "@/components/theme-toggle";
import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";

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
    </div>
  );
}
