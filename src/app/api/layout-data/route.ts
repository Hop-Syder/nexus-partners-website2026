import { NextResponse } from "next/server";

const headerData = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'services', href: '/services' },
  { label: 'work', href: '/work' },
  { label: 'contact', href: '/contact' },
]

const footerData = {
    brand: {
        name: "Nexus Partners",
        socialLinks: [
            {
                name: "LinkedIn",
                icon: "/images/reseau/linkedin.png",
                dark_icon: "/images/reseau/linkedin.png",
                link: "https://www.linkedin.com/company/nexus-partners-bj"
            },
            {
                name: "Facebook",
                icon: "/images/home/footerSocialIcon/twitter.svg", // Placeholder icon
                dark_icon: "/images/home/footerSocialIcon/twitter_dark.svg", // Placeholder icon
                link: "https://www.facebook.com/profile.php?id=61566371714392"
            },
            {
                name: "Instagram",
                icon: "/images/home/footerSocialIcon/instagram.svg",
                dark_icon: "/images/home/footerSocialIcon/instagram_dark.svg",
                link: "https://www.instagram.com/nexuspartners.agency/"
            },
            {
                name: "WhatsApp",
                icon: "/images/reseau/whatsapp.svg",
                dark_icon: "/images/reseau/whatsapp.svg",
                link: "https://wa.me/2290196701733"
            }
        ]
    },
    sitemap: {
        links: [
            { name: "Home", url: "/", key: "home" },
            { name: "About us", url: "/about", key: "about" },
            { name: "Services", url: "/services", key: "services" },
            { name: "Work", url: "/work", key: "work" },
            { name: "Contact us", url: "/contact", key: "contact" }
        ]
    },
    otherPages: {
        links: [
            { name: "Conditions Générales", url: "/terms-and-conditions", key: "terms" },
            { name: "Politique de Confidentialité", url: "/privacy-policy", key: "privacy" },
            { name: "Mentions légales", url: "/legal-notices", key: "notices" },
            { name: "Documentation", url: "/documentation", key: "docs" }
        ]
    },
    contactDetails: {
        address: "Cotonou, Bénin",
        email: "contact@nexus-partners.xyz",
        phone: "+229 01 96 70 17 33"
    }
};

export const GET = async () => {
  return NextResponse.json({
    headerData,
    footerData
  });
};