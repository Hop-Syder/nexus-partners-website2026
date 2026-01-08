/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Hero V2 inspirée de Home avec TextGenerateEffect.
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
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const ServiceHero = () => {
    const t = useTranslations('Services.Hero')

    const bottomAnimation = {
        initial: { y: '20%', opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: 1.2 },
    }

    return (
        <section className='overflow-hidden'>
            <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
                <div className='container relative z-10'>
                    <div className='flex flex-col gap-8'>
                        {/* Heading text avec TextGenerateEffect */}
                        <div className='relative flex flex-col text-center items-center gap-4'>
                            <h1>
                                <TextGenerateEffect words="Nos Services :" />
                                <br />
                                <TextGenerateEffect
                                    words="Du Digital qui Vend Vraiment"
                                    delay={0.8}
                                    className="italic font-normal instrument-font"
                                />
                            </h1>
                            <p className='max-w-38 text-dark_black/60 dark:text-white/60 text-xl'>
                                {t('subtitle')}
                            </p>
                        </div>

                        <motion.div
                            {...bottomAnimation}
                            className='flex flex-col items-center justify-center gap-4'
                        >
                            <Link
                                href='/contact'
                                className='group relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-pale-yellow via-pale-yellow to-orange text-dark_black rounded-full font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(255,193,7,0.5)] hover:scale-105'
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    {t('cta')}
                                    <Icon icon="ph:arrow-right-bold" className="transition-transform group-hover:translate-x-2 text-2xl" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero
