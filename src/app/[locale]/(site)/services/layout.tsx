/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Metadata layout pour la page Services — SEO optimisé
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Nos Services | Nexus Partners — Création Web, SEO & IA au Bénin',
    description: 'Nexus Partners propose des services digitaux haut de gamme : création de sites web, référencement SEO, solutions IA, automatisation et branding à Cotonou, Bénin.',
    keywords: ['services digitaux Bénin', 'création web Cotonou', 'SEO Bénin', 'intelligence artificielle Afrique', 'agence digitale Cotonou', 'Nexus Partners services'],
    alternates: {
        canonical: 'https://nexus-partners.xyz/fr/services',
        languages: {
            'fr': 'https://nexus-partners.xyz/fr/services',
            'en': 'https://nexus-partners.xyz/en/services',
        },
    },
    openGraph: {
        title: 'Services de Nexus Partners — Agence Digitale Premium',
        description: 'Création web, SEO, branding et solutions IA sur mesure pour les entreprises au Bénin et en Afrique.',
        url: 'https://nexus-partners.xyz/fr/services',
        images: [{ url: '/images/logo/logo-nexuspartners.png', width: 1200, height: 630, alt: 'Services Nexus Partners' }],
    },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return children
}
