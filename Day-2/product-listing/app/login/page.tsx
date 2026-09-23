"use client";

import { useState } from "react";
import Link from "next/link";
//import Header from "@/components/Header";
//import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email){
        alert("Please enter the email");
        return;
    }
    if (!email.includes("@")){
        alert("please enter a valid email")
        return;
    }
    if (password.length<6){
        alert("password must be at least 6")
    }

    alert("Login submitted!");
    }



  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">

      {/* Background decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-100 opacity-70" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-100 opacity-70" />

      {/* Main */}
      <div className="relative flex min-h-screen items-center justify-center px-5 py-12">

        {/* Card */}
        <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl sm:p-12">

          {/* Logo */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-700">
              Shop<span className="text-blue-500">Ease</span>
            </h1>

            <h2 className="mt-7 text-3xl font-bold text-slate-900">
              Welcome Back
            </h2>

            <p className="mt-3 text-base text-slate-500">
              Login to your account and continue
              <br />
              your shopping journey.
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 sm:p-8">

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold text-slate-800"
                >
                  Email Address
                </label>

                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-6">

                <div className="mb-3 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-semibold text-slate-800"
                  >
                    Password
                  </label>

                  <Link
  href="/ForgotPassword"
  
  className="text-sm font-medium text-blue-600 hover:text-blue-700"
>
  Forgot Password?
</Link>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Remember */}
              <div className="mb-8 flex items-center gap-3">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-5 w-5 rounded border-slate-300 accent-blue-600"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-slate-600"
                >
                  Remember me
                </label>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-blue-600"
              >
                Login
              </button>

            </form>

            {/* Bottom */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200" />

              <span className="whitespace-nowrap text-sm text-slate-500">
                Don't have an account?
              </span>

              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="mt-5 text-center">
              <Link
                href="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                Create Account
              </Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}