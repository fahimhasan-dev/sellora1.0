"use client";

import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLoginButtons() {
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result)
  };
  return (
    <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
      <button
        onClick={() => handleSocialLogin("google")}
        className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 shadow-sm hover:bg-gray-100 transition"
      >
        <FcGoogle /> Continue with Google
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg px-4 py-2 shadow-sm hover:bg-gray-800 transition"
      >
        <FaGithub /> Continue with GitHub
      </button>
    </div>
  );
}
