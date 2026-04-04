/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Configuration robots.txt pour l'indexabilité totale et l'accessibilité IA
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/api/og'],
                disallow: ['/api/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Google-CloudVertexBot', 'Anthropic-AI', 'Claude-Web', 'ClaudeBot', 'PerplexityBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://nexus-partners.xyz/sitemap.xml',
    }
}


