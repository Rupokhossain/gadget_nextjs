"use client";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="lg:py-40 md:py-24 py-16 flex items-center justify-center px-4 relative overflow-hidden">
      

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white/40 p-10 text-center animate-fadeIn">
        
        {/* Logo */}
        <h2 className="md:text-4xl text-3xl font-extrabold tracking-tight mb-2 Merienda">
          Electra<span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent ">Hub</span>
        </h2>

        <p className="text-gray-500 mb-8">
          Power up your gadget experience ⚡
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="group w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 font-semibold text-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <FaGoogle className="text-xl text-red-500 group-hover:scale-110 transition" />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/" })}
            className="group w-full flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-gray-900 to-gray-700 py-3 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <FaGithub className="text-xl group-hover:rotate-6 transition" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <span className="h-px flex-1 bg-gray-300"></span>
          <span className="text-xs text-gray-400 uppercase tracking-widest">
            or
          </span>
          <span className="h-px flex-1 bg-gray-300"></span>
        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 leading-relaxed">
          By continuing, you agree to ElectraHub’s <br />
          <span className="underline hover:text-gray-600 cursor-pointer">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="underline hover:text-gray-600 cursor-pointer">
            Privacy Policy
          </span>.
        </p>
      </div>
    </div>
  );
}
