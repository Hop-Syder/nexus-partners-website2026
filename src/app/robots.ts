/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Configuration robots.txt pour l'indexabilité totale
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
        },
        sitemap: 'https://nexus-partners.xyz/sitemap.xml',
    }
}

