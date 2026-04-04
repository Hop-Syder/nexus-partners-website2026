/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Proxy Next.js 16 — remplace middleware.ts (déprécié).
 *              Gestion des locales FR/EN via next-intl.
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Proxy "thin" : uniquement la négociation de locale + redirects i18n
export default createMiddleware(routing);

export const config = {
  // Matche tous les chemins sauf :
  // - fichiers statiques (ex: logo.png)
  // - routes api internes
  // - chemins _next, _vercel
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)',]
};
