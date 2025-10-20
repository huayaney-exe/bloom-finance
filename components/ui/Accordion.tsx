"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-bloom-sage/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:bg-bloom-warm-white/50 transition-colors px-4 rounded group"
        aria-expanded={isOpen}
        aria-label={isOpen ? `Cerrar: ${question}` : `Abrir: ${question}`}
      >
        <span className="font-display text-display-3 text-bloom-charcoal pr-4">
          {question}
        </span>
        <ChevronDown
          className={`text-bloom-sage transition-transform duration-200 flex-shrink-0 group-hover:text-bloom-deep-green ${
            isOpen ? "rotate-180" : ""
          }`}
          size={24}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4 text-body text-bloom-gray leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
