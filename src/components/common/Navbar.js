"use client";

import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Imperial_Script } from "next/font/google";
import LoginButton from "./LoginButton";

const imperial = Imperial_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

 
  if (pathName.includes("dashboard")) return null;

  return (
    <nav className="bg-gray-100 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between py-3 md:py-4">
          
          <Link
            href="/"
            className={`${imperial.className} text-3xl sm:text-4xl font-bold text-[#6c7fd8] tracking-tight`}
          >
            Selora
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/ProductsPage"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-800 font-medium hover:text-[#6c7fd8] transition-colors"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search (Desktop) */}
            <div className="hidden xl:flex items-center bg-white border border-[#6c7fd8] rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="px-3 py-2 w-48 lg:w-64 text-sm outline-none"
              />
              <button className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white px-4 py-2 text-sm transition-colors">
                Search
              </button>
            </div>

            {/* Auth Buttons (md+) */}
            <div className="hidden md:flex items-center gap-2">
              <LoginButton />
              <Link
                href="/register"
                className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-sm transition-colors"
              >
                Register
              </Link>
            </div>

            {/* Cart */}
            <button className="p-2 rounded-full hover:bg-[#e6e8f6] text-[#6c7fd8] transition-colors">
              <FaShoppingCart size={18} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              {isOpen ? (
                <FaTimes size={22} className="text-[#6c7fd8]" />
              ) : (
                <FaBars size={22} className="text-[#6c7fd8]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <div className="flex flex-col p-4 gap-4">
            {/* Nav Links */}
            <Link
              href="/"
              className="text-gray-800 font-medium hover:text-[#6c7fd8]"
            >
              Home
            </Link>
            <Link
              href="/ProductsPage"
              className="text-gray-800 font-medium hover:text-[#6c7fd8]"
            >
              All Products
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-800 font-medium hover:text-[#6c7fd8]"
            >
              Dashboard
            </Link>

            {/* Search (Mobile) */}
            <div className="flex items-center border border-[#6c7fd8] rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-grow px-3 py-2 text-sm outline-none"
              />
              <button className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white px-4 py-2 text-sm transition-colors">
                Search
              </button>
            </div>

            {/* Auth Buttons (Mobile) */}
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-center text-sm transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#6c7fd8] hover:bg-[#4557a8] text-white rounded px-4 py-2 text-center text-sm transition-colors"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
