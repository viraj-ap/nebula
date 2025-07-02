"use client";
import { CurrencyComboBox } from "@/components/currency-combo-box";
import SkeletonWrapper from "@/components/skeleton-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Category } from "@prisma/client";
import { TransactionType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { TrashIcon, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import CreateCategoryDialog from "../dashboard/_components/create-category-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import DeleteCategoryDialog from "../dashboard/_components/delete-category-dialog";

const page = () => {
  return (
    <>
      <div className="border-b bg-card">
        <div className="container items-center justify-between gap-2 py-4 px-4 md:py-8 md:px-8">
          <h1 className="text-2xl md:text-3xl font-bold">Manage</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Manage your account settings and categories.
          </p>
        </div>
      </div>
      <div className="container flex flex-col gap-3 p-2 mx-auto">
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl">Currency</CardTitle>
            <CardDescription>
              Set your preferred currency for transactions.
            </CardDescription>
            <CardContent className="px-0 pt-3 pb-0">
              <CurrencyComboBox />
            </CardContent>
          </CardHeader>
        </Card>
        <CategoryList type="income" />
        <CategoryList type="expense" />
        <Separator />
      </div>
    </>
  );
};

export default page;

function CategoryList({ type }: { type: TransactionType }) {
  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: async () => {
      const response = await fetch(`/api/categories?type=${type}`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return response.json();
    },
  });

  const dataAvailable = categoriesQuery.data && categoriesQuery.data.length > 0;

  return (
    <>
      <SkeletonWrapper isLoading={categoriesQuery.isLoading}>
        <Card>
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {type === "expense" ? (
                  <TrendingDown className="h-8 w-8 md:h-12 md:w-12 items-center rounded-lg bg-red-400/10 p-1 md:p-2 text-red-500" />
                ) : (
                  <TrendingUp className="h-8 w-8 md:h-12 md:w-12 items-center rounded-lg bg-emerald-400/10 p-1 md:p-2 text-emerald-500" />
                )}
                <div className="text-xl md:text-2xl font-semibold">
                  {type === "expense" ? "Expenses" : "Income"} categories
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Sorted by name
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <CreateCategoryDialog
                  type={type}
                  successCallback={() => {
                    categoriesQuery.refetch();
                  }}
                  trigger={
                    <Button
                      className={cn(
                        "w-full cursor-pointer text-sm",
                        type === "expense"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-emerald-500 hover:bg-emerald-600"
                      )}
                    >
                      Create new {type}{" "}
                      <span className="font-bold ml-1">+</span>
                    </Button>
                  }
                />
              </div>
            </CardTitle>
          </CardHeader>
          {!dataAvailable && (
            <div className="flex h-32 md:h-40 w-full flex-col items-center justify-center">
              <p className="text-sm md:text-base">
                No{" "}
                <span
                  className={cn(
                    "ml-1",
                    type === "income" ? "text-emerald-500" : "text-red-500"
                  )}
                >
                  {type} {" "}
                </span>
                categories yet.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Create one to get started
              </p>
            </div>
          )}
          {dataAvailable && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
              {categoriesQuery.data.map((category: Category) => (
                <CategoryCard category={category} key={category.name} />
              ))}
            </div>
          )}
        </Card>
      </SkeletonWrapper>
    </>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Card className="flex flex-col items-center justify-between">
      <CardHeader className="flex flex-col items-center p-3 md:p-6">
        <div className="text-3xl md:text-5xl">{category.icon}</div>
        <CardTitle className="text-md md:text-lg font-semibold mt-2">{category.name}</CardTitle>
      </CardHeader>
      <CardContent className="pb-3 pt-0 px-3 w-full">
        <DeleteCategoryDialog
          category={category}
          trigger={
            <Button className="w-full cursor-pointer text-xs md:text-sm" size="sm">
              <TrashIcon className="h-4 w-4 mr-1" /> Remove
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
}
