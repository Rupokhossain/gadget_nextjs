"use client";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="w-7xl max-w-md rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-gray-200 p-10 text-center">
        
        {/* Logo */}
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">
          Electra<span className="text-blue-600">Hub</span>
        </h2>

        <p className="text-gray-500 mb-8">
          Sign in to power up your gadget experience
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center cursor-pointer gap-3 rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
          >
            <FaGoogle className="text-xl text-red-500" />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center cursor-pointer gap-3 rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
          >
            <FaGithub className="text-xl" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="text-xs text-gray-400">OR</span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </div>

        <p className="text-xs text-gray-400 leading-relaxed">
          By continuing, you agree to ElectraHub’s <br />
          <span className="underline cursor-pointer">Terms of Service</span> and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
