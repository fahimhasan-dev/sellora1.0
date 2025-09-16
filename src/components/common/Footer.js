// components/Footer.tsx
"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6c80d825] text-gray-700 mt-12">
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 py-10 sm:py-12 grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#6c7fd8]">
            Selora
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            Your trusted online marketplace for fresh groceries, healthy
            products & more.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8] hover:text-white transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-2 bg-white rounded-full shadow hover:bg-[#6c7fd8] hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#6c7fd8]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get weekly updates about our latest products and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-[#6c7fd8] text-white px-5 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-[#5b73dd] transition text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#6c80d813] text-center py-4 text-xs sm:text-sm text-gray-600">
        © {new Date().getFullYear()} Selora. All rights reserved.
      </div>
    </footer>
  );
}
