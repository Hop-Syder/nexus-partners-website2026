/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Fondateur Style Magazine Premium.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
*/
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

const Founder = () => {
    const t = useTranslations('About')

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 }
    }

    return (
        <section className="py-24 bg-white dark:bg-dark_black relative overflow-hidden">
            <div className="container relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-24">

                    {/* Left Side: Portrait with Editorial Accent */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:w-1/2 relative"
                    >
                        {/* Background Text Accent */}
                        <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 text-[6rem] sm:text-[12rem] font-bold text-dark_black/[0.03] dark:text-white/[0.03] select-none pointer-events-none uppercase">
                        </div>

                        <div className="relative z-10">
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative group">
                                <Image
                                    src="/images/team/ismael_daouda_abassi.png"
                                    alt={t('Founder.name')}
                                    fill
                                    className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-dark_black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-10 -right-10 p-8 bg-white dark:bg-dark_black rounded-[2rem] shadow-2xl border border-dark_black/5 dark:border-white/10 hidden md:block"
                            >
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green animate-pulse"></div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-dark_black/40 dark:text-white/40 italic instrument-font">Fondateur & Directeur</span>
                                </div>
                                <h4 className="text-2xl font-bold text-dark_black dark:text-white">I. DAOUDA ABASSI</h4>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Editorial Content */}
                    <motion.div
                        {...fadeIn}
                        className="lg:w-1/2"
                    >
                        <span className="text-purple_blue font-bold uppercase tracking-widest text-xs mb-8 block">Le Mot du Fondateur</span>

                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold text-dark_black dark:text-white mb-8 tracking-tighter leading-none">
                            Nexus Partners<br />
                            <span className="text-dark_black/20 dark:text-white/20 italic instrument-font font-normal">est une conviction.</span>
                        </h2>

                        <div className="w-24 h-1 bg-purple_blue mb-12"></div>

                        <div className="relative">
                            <Icon icon="ph:quotes-bold" className="absolute -top-10 -left-10 text-8xl text-purple_blue/10" />
                            <p className="text-xl md:text-3xl text-dark_black/80 dark:text-white/80 leading-relaxed mb-12 italic instrument-font">
                                "{t('Founder.bio')}"
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                            <div className="flex gap-4">
                                <Link
                                    href="https://linkedin.com"
                                    className="w-14 h-14 rounded-full border border-dark_black/10 dark:border-white/10 flex items-center justify-center hover:scale-110 transition-all bg-white dark:bg-white/5 overflow-hidden p-3"
                                >
                                    <Image
                                        src="/images/reseau/linkedin.png"
                                        alt="LinkedIn"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </Link>
                                <Link
                                    href="https://wa.me/2290196701733"
                                    className="w-14 h-14 rounded-full border border-dark_black/10 dark:border-white/10 flex items-center justify-center hover:scale-110 transition-all bg-white dark:bg-white/5 overflow-hidden p-3"
                                >
                                    <Image
                                        src="/images/reseau/whatsapp.svg"
                                        alt="WhatsApp"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </Link>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-dark_black dark:text-white">{t('Founder.name')}</span>
                                <span className="text-sm uppercase tracking-widest text-dark_black/40 dark:text-white/40">{t('Founder.role')}</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/bg-dots.png')] opacity-[0.03] pointer-events-none"></div>
        </section>
    )
}

export default Founder
