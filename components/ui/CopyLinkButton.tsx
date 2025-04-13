'use client';

import { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const copyUrl = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2600);
      })
      .catch(err => console.error("Failed to copy URL: ", err));
  };

  return (
    <button
      onClick={copyUrl}
      className="relative group flex items-center gap-2 text-sm px-4 py-2 border border-slate-300 dark:border-slate-600 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      <span className="relative w-4 h-4">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaCheck className="w-full h-full text-green-500" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaCopy className="w-full h-full" />
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      {copied ? "Link copied!" : "Copy link"}
    </button>
  );
}