"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { ModeToggle } from "./theme-toggle";

const navItems = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Transactions", link: "/transactions" },
  { label: "Manage", link: "/manage" },
];

export default function NavbarInside() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function NavbarItem({
  label,
  link,
  onClick,
}: {
  label: string;
  link: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;

  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        onClick={onClick}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "text-lg text-muted-foreground justify-start hover:text-foreground",
          isActive && "text-foreground font-semibold"
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-8 -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className="hidden md:block border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </div>

        {/* Center Nav Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavbarItem key={item.label} label={item.label} link={item.link} />
          ))}
        </div>

        {/* Right Side: Mode + User */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <UserButton afterSwitchSessionUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="h-5 w-5 ml-6" />
              <img src="/logo.png" alt="logo" className="ml-2" />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="pt-6 px-4">
            <SheetTitle>
              <img src="/logo.png" alt="" className="w-12" />
              <div></div>
            </SheetTitle>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <NavbarItem
                  key={item.label}
                  label={item.label}
                  link={item.link}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Right side: Theme toggle + User */}
        <div className="flex items-center gap-3">
          <ModeToggle />
          <UserButton afterSwitchSessionUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}
