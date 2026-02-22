'use client'

import { ThemeProvider } from 'next-themes'
import ScrollToTop from '../app/components/scroll-to-top'
import WhatsAppButton from '../app/components/shared/whatsapp-button'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            {children}
            <WhatsAppButton />
            <ScrollToTop />
        </ThemeProvider>
    )
}
