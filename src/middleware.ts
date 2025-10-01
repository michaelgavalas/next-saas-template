import { type NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth/server";

export async function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);

  // Get session using middleware-friendly headers
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  // 1) /c* requires auth → redirect to /sign-in if missing session
  if (pathname.startsWith("/c") && !session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // 2) /sign-in or /sign-up with session → redirect to /c
  if ((pathname === "/sign-in" || pathname === "/sign-up") && session) {
    return NextResponse.redirect(new URL("/c", request.url));
  }

  return NextResponse.next();
}

// Only run where it matters
export const config = {
  runtime: "nodejs",
  matcher: ["/d/:path*", "/sign-in", "/sign-up"],
};
