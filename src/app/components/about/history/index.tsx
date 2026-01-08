/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Histoire Minimaliste & Narratrice.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexuspartners.xyz
*/
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import Image from 'next/image'

const History = () => {
    const t = useTranslations('About')

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 }
    }

    return (
        <section className="py-20 bg-[#FDFDFD] dark:bg-dark_black/20 overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 border border-dark_black/5 dark:border-white/5 rounded-[3rem] -z-10"></div>
                        <div className="relative aspect-[3/4] md:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl  transition-all duration-700">
                            <Image
                                src="/images/about/historique.png"
                                alt="Nexus Partners"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Caption overlay */}
                        <div className="absolute bottom-10 -right-10 p-6 bg-white dark:bg-dark_black rounded-2xl shadow-xl border border-dark_black/5 dark:border-white/5 text-xs font-bold uppercase tracking-widest text-purple_blue z-20">
                            Cotonou, Bénin • 2024
                        </div>
                    </motion.div>

                    <motion.div {...fadeIn}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[1px] bg-purple_blue"></div>
                            <span className="text-xs font-bold uppercase tracking-widest text-dark_black/40 dark:text-white/40">Genèse du projet</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-dark_black dark:text-white tracking-tight leading-tight">
                            {t('History.title')}
                        </h2>

                        <div className="space-y-8">
                            <p className="text-2xl font-medium text-purple_blue italic instrument-font leading-relaxed">
                                "{t('History.constat')}"
                            </p>
                            <p className="text-xl text-dark_black/60 dark:text-white/60 leading-relaxed">
                                {t('History.mission_context')}
                            </p>
                            <div className="pt-6">
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark_black/10 dark:border-white/10 text-sm font-bold">
                                    <span className="w-2 h-2 rounded-full bg-purple_blue"></span>
                                    Impact Local
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default History
