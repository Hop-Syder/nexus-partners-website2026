/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Portfolio (Work) regroupant les réalisations de Nexus Partners.
 * @created 2026-01-07
 * @updated 2026-03-12
 * 🌐 ceo.nexus-partners.xyz
*/
import { Metadata } from "next";
import NosProjets from "@/app/components/home/online-presence";
import Innovation from "@/app/components/home/innovation";
import Solutions from "@/app/components/home/solution";
import { NosProjetsList, innovationList } from "@/data/page-data";

export const metadata: Metadata = {
    title: 'Nos Projets & Portfolio | Nexus Partners — Réalisations Digitales au Bénin',
    description: 'Explorez le portfolio de Nexus Partners : sites web premium, applications, identités visuelles et solutions digitales conçues pour des clients au Bénin et en Afrique.',
    keywords: ['portfolio Nexus Partners', 'réalisations web Bénin', 'projets digitaux Cotonou', 'exemples sites web Bénin', 'agence créative Cotonou'],
    alternates: {
        canonical: 'https://nexus-partners.xyz/fr/work',
        languages: {
            'fr': 'https://nexus-partners.xyz/fr/work',
            'en': 'https://nexus-partners.xyz/en/work',
        },
    },
    openGraph: {
        title: 'Portfolio Nexus Partners — Nos Réalisations Digitales',
        description: 'Sites web, applications et solutions digitales créées pour des entreprises au Bénin et en Afrique.',
        url: 'https://nexus-partners.xyz/fr/work',
        images: [{ url: '/images/logo/logo-nexuspartners.png', width: 1200, height: 630, alt: 'Portfolio Nexus Partners' }],
    },
};

export default function WorkPage() {
    return (
        <main className="pt-20">
            {/* Section Principale : Portfolio */}
            <NosProjets data={NosProjetsList} />

            {/* Rappel des Services pour conversion */}
            <Innovation data={innovationList} />

            {/* CTA Final */}
            <Solutions />
        </main>
    );
}
