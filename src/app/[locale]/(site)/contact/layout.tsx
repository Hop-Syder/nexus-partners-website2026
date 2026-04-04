/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Metadata layout pour la page Contact — SEO optimisé
 * @created 2026-04-04
 * @updated 2026-04-04
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contactez-Nous | Nexus Partners — Agence Digitale Cotonou',
    description: 'Contactez Nexus Partners pour discuter de votre projet digital. Notre équipe à Cotonou, Bénin, est disponible pour répondre à vos besoins en création web, SEO et IA.',
    keywords: ['contact Nexus Partners', 'agence web Cotonou contact', 'devis création site web Bénin', 'contacter agence digitale Bénin'],
    alternates: {
        canonical: 'https://nexus-partners.xyz/fr/contact',
        languages: {
            'fr': 'https://nexus-partners.xyz/fr/contact',
            'en': 'https://nexus-partners.xyz/en/contact',
        },
    },
    openGraph: {
        title: 'Contactez Nexus Partners — Parlons de votre projet',
        description: 'Discutez de votre projet avec notre équipe d\'experts à Cotonou, Bénin. Réponse garantie sous 24h.',
        url: 'https://nexus-partners.xyz/fr/contact',
        images: [{ url: '/images/logo/logo-nexuspartners.png', width: 1200, height: 630, alt: 'Contact Nexus Partners' }],
    },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children
}
