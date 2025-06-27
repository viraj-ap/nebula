"use server";

import { prisma } from "@/lib/prisma";
import {
  CreateCategorySchemaType,
  CreateCateogorySchema,
} from "@/schema/categories";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBody = CreateCateogorySchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error("Bad request");
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { name, type, icon } = parsedBody.data;

  return await prisma.category.create({
    data: {
      name,
      type,
      icon,
      userId: user.id,
    },
  });
}
