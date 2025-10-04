"use client";

import {
  RiDropboxFill,
  RiGoogleFill,
  RiImage2Line,
  RiLinkM,
  RiLock2Line,
  RiMailLine,
  RiMicrosoftFill,
  RiUser3Line,
} from "@remixicon/react";
import { useState } from "react";
import { authClient } from "@/auth/client";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const { data, error } = await authClient.signUp.email({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      if (error) {
        setMessage(error.message || "Sign up failed");
      } else {
        setMessage("Sign up successful!");
        console.log("Signed up user:", data);
      }
    } catch (err: any) {
      setMessage(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create account
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Fill in your details or sign up with a provider.
            </p>
          </div>

          {/* OAuth Providers */}
          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 transition"
            >
              <RiGoogleFill className="h-5 w-5" />
              <span className="text-sm font-medium">Sign up with Google</span>
            </button>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 transition"
            >
              <RiMicrosoftFill className="h-5 w-5" />
              <span className="text-sm font-medium">
                Sign up with Microsoft
              </span>
            </button>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 transition"
            >
              <RiDropboxFill className="h-5 w-5" />
              <span className="text-sm font-medium">Sign up with Dropbox</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-gray-500">or</span>
            </div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser3Line className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiMailLine className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                  className="w-full rounded-xl border px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiLock2Line className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-xl border px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-black disabled:opacity-50 transition"
            >
              <RiMailLine className="h-5 w-5" />
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">{message}</p>
          )}

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Sign in
            </a>
          </p>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          UI wired with authClient.signUp.email
        </p>
      </div>
    </div>
  );
}
