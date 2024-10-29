// middleware.js
import { getAuth } from "firebase/auth";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth = getAuth();
  const user = auth.currentUser;

  // Check if user is authenticated
  if (!user) {
    // Redirect to login if not authenticated
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Specify the paths to protect
export const config = {
  matcher: ["/dashboard/:path*"], // Protect all routes under /dashboard
};
