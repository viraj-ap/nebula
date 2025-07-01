"use client";

import { Category } from "@/lib/generated/prisma";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteCategory } from "../_actions/categories";
import { toast } from "sonner";
import { AlertDialog } from "@/components/ui/alert-dialog";

interface Props {
  trigger: React.ReactNode;
  category: Category;
}

const DeleteCategoryDialog = ({ category, trigger }: Props) => {
  const categoryIdentifier = `${category.name}-${category.type}`;
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: DeleteCategory,
    onSuccess: async (data: Category) => {
      toast.success(`Category ${data.name} deleted successfully! 🎉`, {
        id: categoryIdentifier,
      });
      await queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: () => {
      toast.error("Failed to delete category. Please try again.", {
        id: categoryIdentifier,
      });
    },
  });
  return <AlertDialog></AlertDialog>;
};

export default DeleteCategoryDialog;
