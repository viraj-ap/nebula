import { CurrencyComboBox } from "@/components/currency-combo-box";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  return (
    <div className="container max-w-2xl flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Welcome<span className="ml-2 font-bold">{user.firstName}!!</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Let's get started with setting up your currency first.
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground">
          You can change these settings anytime later.
        </h3>
      </div>
      <Separator />
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="">Currency</CardTitle>
          <CardDescription className="">
            Choose your preferred currency for transactions.
          </CardDescription>
        </CardHeader>
        <CardContent title="Choose your currency">
          <CurrencyComboBox />
        </CardContent>
      </Card>
      <Separator />
      <Button className="w-full" asChild>
        <Link href={"/"}>I'm done take me to the dashboard.</Link>
      </Button>
      <div>
        <img src="/logo.png" alt="" className="w-48" />
      </div>
    </div>
  );
}

export default page;
