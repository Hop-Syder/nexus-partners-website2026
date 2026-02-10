import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames + auth pages
  // Match all pathnames except for
  // - … if they contain a dot (e.g. `logo.png`)
  // - api routes
  // - _next (internal paths)
  // - _vercel (internal paths)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
