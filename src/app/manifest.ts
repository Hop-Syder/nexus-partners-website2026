import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nexus Partners',
    short_name: 'Nexus',
    description: 'Corporate Showcase & Digital Solutions Platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#ffcc00',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
