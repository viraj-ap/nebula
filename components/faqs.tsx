"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Faqs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 text-3xl mb-4" ref={ref}>
      <motion.div
        className="font-bold"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        Frequently asked questions.
      </motion.div>
      <motion.div
        className="mx-auto px-4 w-[60vw]"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Accordion type="single" collapsible>
          {[
            {
              value: "item-1",
              question: "Can we make custom categoires?",
              answer:
                "Yes. You can create custom categories for your transactions.",
            },
            {
              value: "item-2",
              question: "Will others be able to see my categories?",
              answer:
                "No. Categories are private to your account. No one else can see them.",
            },
            {
              value: "item-3",
              question: "Can I export my expenses to csv file?",
              answer:
                "Yes. You can export your expenses to a CSV file for easy sharing and analysis.",
            },
          ].map((item) => (
            <motion.div key={item.value} variants={itemVariants}>
              <AccordionItem value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Faqs;
