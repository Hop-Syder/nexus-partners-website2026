/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Metadata layout pour la page À Propos — SEO optimisé
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'À Propos | Nexus Partners — Agence Digitale à Cotonou, Bénin',
    description: 'Découvrez l\'histoire, les valeurs et l\'équipe derrière Nexus Partners. Une agence digitale premium spécialisée en création web, SEO et solutions IA au Bénin.',
    keywords: ['Nexus Partners', 'agence digitale Bénin', 'agence web Cotonou', 'création de sites web', 'équipe Nexus Partners', 'à propos'],
    alternates: {
        canonical: 'https://nexus-partners.xyz/fr/about',
        languages: {
            'fr': 'https://nexus-partners.xyz/fr/about',
            'en': 'https://nexus-partners.xyz/en/about',
        },
    },
    openGraph: {
        title: 'À Propos de Nexus Partners',
        description: 'L\'agence digitale premium de référence au Bénin. Création web, SEO, IA et solutions sur mesure.',
        url: 'https://nexus-partners.xyz/fr/about',
        images: [{ url: '/images/logo/logo-nexuspartners.png', width: 1200, height: 630, alt: 'Nexus Partners — Agence Digitale' }],
    },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children
}
