"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { ForwardIcon } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="" id="home">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-4 py-10 md:px-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col items-center"
          >
            {/* Question */}
            <div className="bg-primary rounded-lg p-3 font-bold font-poppins text-lg md:text-xl text-center md:text-left mt-4">
              At the end of every month, do you ask yourself
            </div>

            {/* Big Block Text */}
            <div className="bg-primary rounded-lg px-4 py-6 font-bold font-poppins mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-72 h-96 flex flex-col items-center justify-center text-center">
              <p>Where</p>
              <p>did my</p>
              <p className="mt-4">
                <span className="bg-emerald-500 rounded-lg px-2">money</span>{" "}
                go?
              </p>
            </div>

            {/* Tagline */}
            <div className="bg-emerald-500 rounded-lg px-4 py-2 font-bold font-poppins text-lg md:text-xl text-center mt-8">
              Then Nebula is for you!
            </div>
            <Button
              className="mt-4"
              onClick={() => {
                redirect("/dashboard");
              }}
            >
              Go to Dashboard <ForwardIcon />
            </Button>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/hero.png"
              draggable="false"
              alt="Hero"
              className="w-full max-w-[400px] md:max-w-[600px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
