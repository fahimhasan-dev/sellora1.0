"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerUser } from "../actions/auth/registerUser";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const payload = { name, email, password };
    const result = await registerUser(payload);
    console.log(result);
  };
  return (
    <section className="flex h-screen items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6  pt-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="Name"
              className="block text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Full Name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-7 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="text-sm text-right">
            <p className="text-indigo-600 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>

          <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
