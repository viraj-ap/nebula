import { z } from "zod";

export const CreateCateogorySchema = z.object({
  name: z.string().min(3).max(30),
  type: z.enum(["income", "expense"]),
  icon: z.string().max(20),
});

export type CreateCategorySchemaType = z.infer<typeof CreateCateogorySchema>;