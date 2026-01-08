/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Portfolio (Work) regroupant les réalisations de Nexus Partners.
 * @created 2026-01-07
 * @updated 2026-01-07
 * 🌐 ceo.nexuspartners.xyz
*/
import { Metadata } from "next";
import NosProjets from "@/app/components/home/online-presence";
import Innovation from "@/app/components/home/innovation";
import Solutions from "@/app/components/home/solution";

export const metadata: Metadata = {
    title: "Nos Projets | Nexus Partners",
    description: "Découvrez les réalisations digitales de Nexus Partners au Bénin : sites web, SEO et solutions sur mesure.",
};

export default function WorkPage() {
    return (
        <main className="pt-20">
            {/* Section Principale : Portfolio */}
            <NosProjets />

            {/* Rappel des Services pour conversion */}
            <Innovation />

            {/* CTA Final */}
            <Solutions />
        </main>
    );
}
