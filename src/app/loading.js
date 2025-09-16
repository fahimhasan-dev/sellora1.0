"use client";

import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-900 z-[9999]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-14 h-14 rounded-full border-4 border-[#6c7fd8] border-t-transparent"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 flex items-center gap-2 text-[#6c7fd8] dark:text-indigo-400 text-lg font-semibold"
      >
        <FaLeaf className="text-xl" />
        Loading…
      </motion.div>
    </div>
  );
}
