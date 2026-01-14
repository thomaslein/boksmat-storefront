import { NextRequest, NextResponse } from 'next/server';

export function proxy(req: NextRequest) {
  const isInMaintenanceMode = false; 
  const { pathname } = req.nextUrl;

  // 1. Allow access to the maintenance page itself
  if (pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // 2. Allow access to static files (images, css, etc.)
  if (pathname.startsWith('/_next') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // 3. Redirect everything else
  if (isInMaintenanceMode) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }

  return NextResponse.next();
}

export const config = {
  // This ensures the middleware runs on all page requests
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};