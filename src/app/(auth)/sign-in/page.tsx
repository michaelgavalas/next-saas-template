"use client";

import {
  RiGoogleFill,
  RiMicrosoftFill,
  RiDropboxFill,
  RiLock2Line,
  RiUser3Line,
} from "@remixicon/react";
import { authClient } from "@/auth/client";

export default function SignIn() {
  const signInGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/d",
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back. Choose a method below.
            </p>
          </div>

          {/* OAuth Providers */}
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={async () => await signInGoogle()}
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 active:scale-[.99] transition"
            >
              <RiGoogleFill className="h-5 w-5" />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 active:scale-[.99] transition"
            >
              <RiMicrosoftFill className="h-5 w-5" />
              <span className="text-sm font-medium">
                Continue with Microsoft
              </span>
            </button>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 border rounded-xl px-4 py-2.5 hover:bg-gray-50 active:scale-[.99] transition"
            >
              <RiDropboxFill className="h-5 w-5" />
              <span className="text-sm font-medium">Continue with Dropbox</span>
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

          {/* Email / Username + Password */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <RiUser3Line className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  type="text"
                  inputMode="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 placeholder:text-gray-400"
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
                  placeholder="••••••••"
                  className="w-full rounded-xl border px-10 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember me
              </label>
              <a
                href="#"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-black active:scale-[.99] transition"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              className="font-medium text-gray-700 hover:text-gray-900"
            >
              Sign up
            </a>
          </p>
        </div>

        <p className="text-xs text-center text-gray-400 mt-4">
          UI-only demo — wire up your auth of choice.
        </p>
      </div>
    </div>
  );
}
