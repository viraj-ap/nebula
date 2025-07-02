"use client";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { MAX_DATE_RANGE_DAYS } from "@/lib/constants";
import { differenceInDays, startOfMonth } from "date-fns";
import React from "react";
import { toast } from "sonner";
import TransactionTable from "./_components/transaction-table";

const page = () => {
  const [dateRange, setDateRange] = React.useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });
  return (
    <>
      <div className="border-b bg-card mx-auto">
        <div className="container flex items-center justify-between gap-4 py-8 px-8">
          <div className="text-3xl font-bold">Transaction History</div>
          <div>
            <DateRangePicker
              initialDateFrom={dateRange.from}
              initialDateTo={dateRange.to}
              showCompare={false}
              onUpdate={(values) => {
                const { range } = values;
                const { from, to } = range;
                if (!from || !to) return;
                if (differenceInDays(to, from) > MAX_DATE_RANGE_DAYS) {
                  toast.error(
                    `You can only select a date range of ${MAX_DATE_RANGE_DAYS} days.`
                  );
                  return;
                }
                setDateRange({ from, to });
              }}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <TransactionTable from={dateRange.from} to={dateRange.to} />
      </div>
    </>
  );
};

export default page;
