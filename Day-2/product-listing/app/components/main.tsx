"use client";

import { useState } from "react";
import Link from "next/link";

export default function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-12">
      
      <div className="flex min-h-screen items-center justify-center">
        
        {/* Signup Card */}
        <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl sm:p-10">

          {/* Heading */}
          <div className="mb-8 text-center">

            <h1 className="text-4xl font-bold text-blue-600">
              ShopEase
            </h1>

            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Create Account
            </h2>

            <p className="mt-3 text-gray-500">
              Sign up to get started
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleSignup}>

            {/* Full Name */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-8">
              <label
                htmlFor="confirmPassword"
                className="mb-3 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          {/* Login Link */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-center">

            <p className="text-sm text-gray-600">
              Already have an account?
            </p>

            <Link
              href="/login"
              className="mt-2 inline-block font-semibold text-blue-600 hover:text-blue-700 hover:underline"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}
