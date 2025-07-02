"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  return (
    <div className="min-h-screen py-8 transition-colors duration-300" id="features">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] border border-black dark:border-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white max-lg:text-center">
                  Expense List
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-lg:text-center">
                  Keep track of your expenses with our intuitive expense list.
                  Easily add, edit, and delete entries to manage your finances
                  effectively.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-black dark:border-white bg-gray-900 dark:bg-black shadow-2xl">
                  <img
                    alt="Expense"
                    src="/transactions.png"
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] border border-black dark:border-white">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white max-lg:text-center">
                  Dashboard
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-lg:text-center">
                  Look at your overall balance
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center p-1">
                <img
                  alt="Dashboard"
                  src="/dashboard.png"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] border border-black dark:border-white">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white max-lg:text-center">
                  Graphs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-lg:text-center">
                  Get income expense graphs to visualize your spending habits.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt="Security"
                  src="graph.png"
                  className="h-auto object-cover rounded-xl p-2"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-white dark:bg-black max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] border border-black dark:border-white">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white max-lg:text-center">
                  Custom Categories
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-lg:text-center">
                  Create custom categories for your transactions to better
                  organize your finances.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow p-4">
                <img
                  src="/custom.png"
                  alt="Custom API integration"
                  className="mt-12 p-2 rounded-xl"
                />
                <p className="mt-2 text-lg font-medium tracking-tight text-black dark:text-white max-lg:text-center mt-12">
                  Export your data to Excel
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-300 max-lg:text-center">
                  Create custom categories for your transactions to better
                  organize your finances.
                </p>
                <img src="/excel.png" alt="Excel" className="p-2 rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
