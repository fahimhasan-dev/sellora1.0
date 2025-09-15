"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { registerUser } from "../actions/auth/registerUser";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (!strongRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!strongRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Please use a stronger password.",
      });
      return;
    }

    try {
      const payload = { name, email, password };
      const res = await registerUser(payload);

      if (res && res.acknowledged) {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "Your account has been created!",
          timer: 2000,
          showConfirmButton: false,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: res?.message || "User may already exist.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: error.message,
      });
    }
  };

  return (
    <section className="flex h-screen items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 pt-10 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Please enter your full name"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Email */}
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
              placeholder="Please enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Password */}
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
                placeholder="Please enter a strong password"
                className="w-full mt-1 px-4 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                onChange={handlePasswordChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError && (
              <p className="mt-1 text-sm text-red-600">{passwordError}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-sm text-right">
            <p className="text-indigo-600 hover:underline cursor-pointer">
              Forgot password?
            </p>
          </div>

          <button
            type="submit"
            className="w-full hover:bg-[#4557a8] text-gray-100 py-2 rounded-lg bg-[#6c7fd8] transition"
          >
            Register
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
