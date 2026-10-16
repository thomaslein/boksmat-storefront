import { NextRequest, NextResponse } from "next/server";

const isInMaintenanceMode = true;

// Matches requests for static files such as /logo.png or /fonts/a.woff2
const STATIC_FILE = /\.[a-z0-9]+$/i;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!isInMaintenanceMode) {
    return NextResponse.next();
  }

  // Allow the maintenance page itself, Next internals and static files
  if (
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/_next") ||
    STATIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/maintenance", req.url));
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
