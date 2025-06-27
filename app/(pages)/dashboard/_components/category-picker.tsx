"use client";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useCallback } from "react";
import CreateCategoryDialog from "./create-category-dialog";

interface Props {
  type: TransactionType;
  onChange?: (value: string) => void;
  value?: string;
}

const CategoryPicker = React.forwardRef<HTMLButtonElement, Props>(
  ({ type, onChange, value: initialValue }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string | undefined>(initialValue);

    const categoriesQuery = useQuery({
      queryKey: ["categories", type],
      queryFn: () => {
        return fetch(`/api/categories?type=${type}`).then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch categories");
          }
          return res.json();
        });
      },
    });

    const selectedCategory = categoriesQuery.data?.find(
      (category: Category) => category.name === value
    );

    const handleCategorySelect = (categoryName: string) => {
      setValue(categoryName);
      onChange?.(categoryName);
      setOpen(false);
    };

    const successCallback = useCallback(
      (category: Category) => {
        setValue(category.name);
        setOpen((prev) => !prev);
      },
      [setValue, setOpen]
    );

    return (
      <div className="flex flex-col gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {selectedCategory ? (
                <CategoryRow category={selectedCategory} />
              ) : (
                "Select category"
              )}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0" align="start">
            <Command>
              <CommandInput placeholder="Search category..." />
              <CommandList>
                <CommandEmpty>
                  <div className="flex flex-col items-center gap-2 py-4">
                    <p>Category not found</p>
                    <p className="text-xs text-muted-foreground">
                      Tip: Create a new category
                    </p>
                  </div>
                </CommandEmpty>
                <CommandGroup>
                  {categoriesQuery.data?.map((category: Category) => (
                    <CommandItem
                      key={category.name}
                      value={category.name}
                      onSelect={() => handleCategorySelect(category.name)}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === category.name ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <CategoryRow category={category} />
                    </CommandItem>
                  ))}
                </CommandGroup>
                <CommandGroup>
                  <CreateCategoryDialog
                    type={type}
                    successCallback={successCallback}
                  />
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
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
