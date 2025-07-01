import { GetFormatterForCurrency } from "@/lib/helpers";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const queryParams = new URL(request.url);
  const from = queryParams.searchParams.get("from");
  const to = queryParams.searchParams.get("to");

  if (!from || !to) {
    return new Response("Invalid query parameters", { status: 400 });
  }

  const transactions = await getTransactionHistory(
    user.id,
    new Date(from),
    new Date(to)
  );

  return Response.json(transactions);
}

export type GetTransactionHistoryResponseType = Awaited<
  ReturnType<typeof getTransactionHistory>
>;

async function getTransactionHistory(userId: string, from: Date, to: Date) {
  const userSettings = await prisma.userSettings.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userSettings) {
    throw new Error("User settings not found");
  }

  const formatter = GetFormatterForCurrency(userSettings.currency);

  const transactions = await prisma.transaction.findMany({
    where: {
      userId,
      date: {
        gte: from,
        lte: to,
      },
    },
    orderBy: {
      date: "desc",
    },
  });

  return transactions.map((transaction) => ({
    ...transaction,
    formattedAmount: formatter.format(transaction.amount),
  }));
}