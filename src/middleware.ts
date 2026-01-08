import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Logic from former proxy.ts: Redirect logged-in users away from auth pages
  const authPages = ['/signin', '/signup', '/forgot-password'];
  const isAuthPage = authPages.some(page => pathname.includes(page));

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames + auth pages
  // Match all pathnames except for
  // - … if they contain a dot (e.g. `favicon.ico`)
  // - api routes
  // - _next (internal paths)
  // - _vercel (internal paths)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
