/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Hero Premium V2 avec Gradient Mesh et animations évoluées.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Link } from '@/i18n/routing'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const Hero = () => {
    const t = useTranslations('About')

    const blurIn = {
        initial: { opacity: 0, filter: 'blur(10px)', y: 20 },
        animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
        transition: { duration: 1 }
    }

    const fadeIn = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 }
    }


    return (
        <section className='relative w-full min-h-[80vh] flex items-center pt-44 pb-10 overflow-hidden'>

            {/* Background Gradient Mesh - Style Home */}
            <div className='absolute inset-0 -z-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10 opacity-60'>
            </div>


            <div className='container relative z-10'>
                <div className='flex flex-col items-center text-center gap-6 max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-4 py-1.5 rounded-full bg-purple_blue/5 border border-purple_blue/10 text-purple_blue text-xs font-bold uppercase tracking-[0.2em]">
                            {t('Hero.title')}
                        </span>
                    </motion.div>

                    <motion.div {...blurIn} className="flex flex-col items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-bold tracking-tight mb-4 text-dark_black dark:text-white leading-[1.1]">
                            <TextGenerateEffect words="Nexus Partners" className="text-purple_blue text-center" />
                            <br />
                            <TextGenerateEffect
                                words={t('Hero.subtitle')}
                                delay={0.8}
                                className="italic font-normal instrument-font text-dark_black/40 dark:text-white/40 text-center"
                            />
                        </h1>
                    </motion.div>

                    <motion.p
                        {...fadeIn}
                        className="text-lg md:text-2xl text-dark_black/60 dark:text-white/60 mb-10 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t('Hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 items-center"
                    >
                        <Link
                            href='/contact'
                            className='group relative inline-flex items-center justify-center px-10 py-5 bg-brand-yellow text-dark_black rounded-full font-bold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,204,0,0.3)]'
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Découvrir nos solutions
                                <Icon icon="ph:arrow-right-bold" className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-500 ease-in-out"></div>
                        </Link>

                        <Link
                            href='/work'
                            className='px-10 py-5 rounded-full font-bold text-dark_black dark:text-white border border-dark_black/10 dark:border-white/10 hover:bg-dark_black/5 dark:hover:bg-white/5 transition-all'
                        >
                            Voir nos réalisations
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Floating Hero Image */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute top-1/2 right-[-25%] md:right-[-10%] xl:right-[-5%] -translate-y-1/2 z-0 pointer-events-none opacity-40 md:opacity-60 xl:opacity-100 scale-75 md:scale-90 xl:scale-100"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src="/images/about/hero.png"
                        alt="Nexus Hero Graphic"
                        width={600}
                        height={600}
                        className="object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </motion.div>


        </section>
    )
}

export default Hero
