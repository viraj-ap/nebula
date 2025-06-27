import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
import CreateTransactionDialog from "./_components/create-transaction-dialog";
import OverView from "./_components/over-view";

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (!userSettings) {
    redirect("/wizard");
  }

  return (
    <div className="h-full bg-background">
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-4 py-8">
          <p className="text-3xl font-bold ml-5">Hello, {user.firstName} 👋</p>
          <div className="flex items-center gap-3">
            <CreateTransactionDialog
              trigger={
                <Button
                  variant="secondary"
                  className="border-emerald-500 bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white cursor-pointer"
                >
                  New income 💵
                </Button>
              }
              type="income"
            />

            <CreateTransactionDialog
              trigger={
                <Button
                  variant="secondary"
                  className="border-rose-500 bg-rose-600 text-white hover:bg-rose-700 hover:text-white mr-5 cursor-pointer"
                >
                  New expense 💸
                </Button>
              }
              type="expense"
            />
          </div>
        </div>
      </div>
      <OverView userSettings={userSettings} />
    </div>
  );
}

export default page;
