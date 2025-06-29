"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { GetFormatterForCurrency } from "@/lib/helpers";
import { Timeframe } from "@/lib/types";
import { UserSettings } from "@prisma/client";
import React from "react";
import HistoryPeriodSelector from "./history-period-selector";

interface Props {
  userSettings: UserSettings;
}

const History = ({ userSettings }: Props) => {
  const [timeFrame, setTimeFrame] = React.useState<Timeframe>("month");
  const [period, setPeriod] = React.useState<{ year: number; month: number }>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const formatter = React.useMemo(() => {
    return GetFormatterForCurrency(userSettings.currency);
  }, [userSettings.currency]);
  return (
    <div className="container">
      <div className="mt-12 text-3xl font-bold">
        <Card className="col-span-12 mt-2 w-full">
          <CardHeader className="gap-2">
            <CardTitle className="grid grid-flow-row justify-between gap-2 md:grid-flow-col">
              <HistoryPeriodSelector
                period={period}
                setPeriod={setPeriod}
                timeFrame={timeFrame}
                setTimeFrame={setTimeFrame}
              />
              <div className="flex h-10 gap-2">
                <Badge
                  className="flex item-center gap-2 text-sm"
                  variant={"outline"}
                >
                  <div className="h-4 w-4 rounded-full bg-emerald-500"></div>
                  Income
                </Badge>
                <Badge
                  className="flex item-center gap-2 text-sm"
                  variant={"outline"}
                >
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  Expense
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default History;
