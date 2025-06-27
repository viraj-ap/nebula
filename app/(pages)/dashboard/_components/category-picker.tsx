import { Button } from "@/components/ui/button";
import { Command, CommandInput } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import CreateCategoryDialog from "./create-category-dialog";

interface Props {
  type: TransactionType;
  onChange?: (value: string) => void;
  value?: string;
}

const CategoryPicker = React.forwardRef<HTMLButtonElement, Props>(
  ({ type, onChange, value }, ref) => {
    const [open, setOpen] = React.useState(false);

    const categoriesQuery = useQuery({
      queryKey: ["categories", type],
      queryFn: () => {
        return fetch(`/api/categories?type=${type}`).then((res) => {
          return res.json();
        });
      },
    });

    const selectedCategory = categoriesQuery.data?.find(
      (category: Category) => category.name === value
    );

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant={"outline"}
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedCategory ? (
              <CategoryRow category={selectedCategory} />
            ) : (
              "Select category"
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <CommandInput placeholder="Search Category" />
            <CreateCategoryDialog type={type} />
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

CategoryPicker.displayName = "CategoryPicker";

export default CategoryPicker;

function CategoryRow({ category }: { category: Category }) {
  return (
    <div className="flex items-center gap-2">
      <span role="img">{category.icon}</span>
      <span>{category.name}</span>
    </div>
  );
}