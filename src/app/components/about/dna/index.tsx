/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section ADN (Mission, Vision, Valeurs) avec mise en page Bento Grid.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexuspartners.xyz
*/
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const DNA = () => {
    const t = useTranslations('About')

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    }

    return (
        <section className="py-20 relative overflow-hidden bg-white dark:bg-dark_black">
            <div className="container relative z-10">
                <motion.div
                    {...fadeIn}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
                >
                    <div className="max-w-2xl">
                        <span className="text-purple_blue font-bold uppercase tracking-widest text-xs mb-4 block">Notre Essence</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-dark_black dark:text-white leading-tight">
                            Connecter l'ambition locale <br />
                            <span className="text-dark_black/20 dark:text-white/20 italic instrument-font font-normal">à l'excellence numérique</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="w-24 h-24 rounded-full border border-dark_black/10 dark:border-white/10 flex items-center justify-center animate-spin-slow">
                            <Icon icon="ph:asterisk-bold" className="text-3xl text-purple_blue" />
                        </div>
                    </div>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[120px]">

                    {/* Mission - Big Card */}
                    <motion.div
                        {...fadeIn}
                        className="md:col-span-8 md:row-span-3 group relative p-10 rounded-[3rem] bg-[#F9FAFB] dark:bg-white/5 border border-dark_black/5 dark:border-white/5 overflow-hidden"
                    >
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="w-16 h-16 bg-white dark:bg-dark_black rounded-2xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Icon icon="ph:target-bold" className="text-3xl text-purple_blue" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-dark_black dark:text-white">{t('Philosophy.mission.title')}</h3>
                                <p className="text-xl text-dark_black/60 dark:text-white/60 max-w-xl leading-relaxed">
                                    {t('Philosophy.mission.text')}
                                </p>
                            </div>
                        </div>
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                            <Image
                                src="/images/about/mission.svg"
                                alt="Mission Background"
                                fill
                                className="object-cover object-right-bottom"
                            />
                        </div>
                        {/* Decorative Gradient */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple_blue/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-purple_blue/10 transition-colors"></div>
                    </motion.div>

                    {/* Vision - Tall Card */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-4 md:row-span-6 group relative p-10 rounded-[3rem] bg-purple_blue text-white overflow-hidden shadow-2xl"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                                <Icon icon="ph:eye-bold" className="text-3xl text-white" />
                            </div>
                            <h3 className="text-3xl font-bold mb-6">{t('Philosophy.vision.title')}</h3>
                            <p className="text-lg text-white/80 leading-relaxed mb-auto">
                                {t('Philosophy.vision.text')}
                            </p>
                            <div className="mt-20 self-end">
                                <Icon icon="ph:quotes-bold" className="text-8xl opacity-10" />
                            </div>
                        </div>
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <Image
                                src="/images/about/vision.svg"
                                alt="Vision Background"
                                fill
                                className="object-cover object-right-bottom"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </motion.div>

                    {/* Valeurs - Wide Card Redesigned */}
                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-8 md:row-span-3 group relative p-10 rounded-[3rem] bg-dark_black text-white overflow-hidden border border-white/10"
                    >
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Icon icon="ph:heart-bold" className="text-2xl text-purple_blue" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">{t('Philosophy.values.title')}</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                                {[
                                    { icon: 'ph:lightning-bold', color: 'text-purple_blue' },
                                    { icon: 'ph:chart-bar-bold', color: 'text-green' },
                                    { icon: 'ph:handshake-bold', color: 'text-pale-yellow' },
                                    { icon: 'ph:lightbulb-bold', color: 'text-orange' }
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 group/item flex items-center gap-4"
                                    >
                                        <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${item.color} group-hover/item:scale-110 transition-transform`}>
                                            <Icon icon={item.icon} className="text-xl" />
                                        </div>
                                        <p className="text-base font-medium text-white transition-colors">
                                            {t.raw('Philosophy.values.list')[idx]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                            <Image
                                src="/images/about/valeurs.svg"
                                alt="Valeurs Background"
                                fill
                                className="object-cover object-right-bottom"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-[20%] right-[-5%] w-96 h-96 border border-dark_black/5 dark:border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] border border-dark_black/5 dark:border-white/5 rounded-full pointer-events-none"></div>
        </section>
    )
}

export default DNA
