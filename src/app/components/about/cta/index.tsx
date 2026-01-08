/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Bannière CTA finale pour la page À propos.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexuspartners.xyz
*/
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Link } from '@/i18n/routing'
import { Icon } from '@iconify/react'

const AboutCTA = () => {
    const t = useTranslations('About')
    const tCommon = useTranslations('Innovation.cta_banner')

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-12 md:p-24 rounded-[4rem] bg-purple_blue text-white text-center overflow-hidden shadow-[0_40px_100px_rgba(102,102,255,0.3)]"
                >
                    {/* Background Texture */}
                    <div className="absolute inset-0 bg-[url('/images/bg-dots.png')] opacity-10 pointer-events-none"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Prêt à transformer <br />
                            <span className="italic font-normal instrument-font opacity-60">votre vision en réalité ?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 mb-12">
                            {tCommon('title')}
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-brand-yellow text-dark_black rounded-full font-bold hover:scale-105 transition-all shadow-2xl group"
                        >
                            Démarrer votre projet
                            <Icon icon="ph:arrow-right-bold" className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 border-2 border-white/5 rounded-full animate-bounce-slow"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutCTA
