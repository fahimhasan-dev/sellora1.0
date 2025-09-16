"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white via-indigo-50 to-indigo-100 px-4 text-center">
      {/* Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <Image
          src="https://i.ibb.co.com/S4nhG3yZ/Wl-NJosoy3-Q.gif" 
          alt="Page not found"
          width={260}
          height={260}
          priority
          className="object-contain drop-shadow-md"
        />
      </motion.div>

     
      <h1 className="text-5xl sm:text-6xl font-extrabold text-[#6c7fd8] mb-3">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Freshness not found
      </h2>
      <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base">
        The page you’re looking for might have been removed, renamed, or is
        temporarily unavailable. Let’s get you back to delicious treats!
      </p>

       
          
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6c7fd8] hover:bg-[#4060eb] text-white font-medium transition"
      >
        <FaHome className="text-lg" />
        Back to Home
      </Link>
    </div>
  );
}
