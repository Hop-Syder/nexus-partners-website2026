/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Stats avec métriques clés et CountUp.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'motion/react'
import CountUp from 'react-countup'

const ServiceIntroduction = () => {
    const t = useTranslations('Services.Introduction')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    const stats = [
        { value: 50, suffix: '+', label: 'Clients Satisfaits' },
        { value: 200, suffix: '%', label: 'ROI Moyen' },
        { value: 4, suffix: ' sem', label: 'Déploiement Max' }
    ]

    return (
        <section className="py-20 bg-[#FDFDFD] dark:bg-dark_black/20">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-3xl text-dark_black/80 dark:text-white/80 leading-relaxed font-medium"
                    >
                        {t('text')}
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white dark:bg-dark_black/50 border border-dark_black/5 dark:border-white/5 shadow-lg hover:shadow-2xl hover:border-purple_blue/30 transition-all group"
                        >
                            <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple_blue to-pale-yellow bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                                {inView && <CountUp end={stat.value} duration={2.5} />}
                                {stat.suffix}
                            </div>
                            <span className="text-lg font-bold text-dark_black dark:text-white uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceIntroduction
