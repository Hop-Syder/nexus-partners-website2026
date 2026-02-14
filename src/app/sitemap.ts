import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nexus-partners.xyz'
    const locales = ['fr', 'en']
    const pages = ['', '/about', '/services', '/work', '/contact', '/privacy-policy', '/terms-and-conditions', '/legal-notices']

    const entries: MetadataRoute.Sitemap = []

    locales.forEach((locale) => {
        pages.forEach((page) => {
            entries.push({
                url: `${baseUrl}/${locale}${page}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: page === '' ? 1 : 0.8,
            })
        })
    })

    return entries
}
