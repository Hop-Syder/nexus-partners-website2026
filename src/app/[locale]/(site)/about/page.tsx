/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page 'À propos' refactorisée avec un design Premium V2 (Luxe Minimaliste).
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/
'use client'
import React from 'react'
import Image from 'next/image'
import Hero from '@/app/components/about/hero'
import History from '@/app/components/about/history'
import DNA from '@/app/components/about/dna'
import Solutions from '@/app/components/about/solutions'
import WhyUs from '@/app/components/about/why-us'
import Founder from '@/app/components/about/founder'
import AboutCTA from '@/app/components/about/cta'

const AboutPage = () => {
    return (
        <main className="relative bg-white dark:bg-dark_black min-h-screen">

            {/* Page Content */}
            <div className="relative z-10 w-full">
                <Hero />
                <History />
                <DNA />
                <Solutions />
                <WhyUs />
                <Founder />
                <AboutCTA />
            </div>
        </main>
    )
}

export default AboutPage
