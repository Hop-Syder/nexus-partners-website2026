/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page Services complète avec tous les composants.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React from 'react'
import ServiceHero from '@/app/components/service/hero'
import ServiceIntroduction from '@/app/components/service/introduction'
import ServiceCards from '@/app/components/service/service-cards'
import ServiceTestimonials from '@/app/components/service/testimonials'
import ServiceProcess from '@/app/components/service/process'
import ServiceFinalCTA from '@/app/components/service/final-cta'

const ServicePage = () => {
    return (
        <main className="relative bg-white dark:bg-dark_black">
            <ServiceHero />
            <ServiceIntroduction />
            <ServiceCards />
            <ServiceTestimonials />
            <ServiceProcess />
            <ServiceFinalCTA />
        </main>
    )
}

export default ServicePage
