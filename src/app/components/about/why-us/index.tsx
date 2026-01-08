/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Pourquoi Nous avec design Bento Grid asymétrique premium.
 * @created 2026-01-03
 * @updated 2026-01-04
 * 🌐 ceo.nexuspartners.xyz
 */
'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'motion/react'
import { Icon } from '@iconify/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const WhyUs = () => {
    const t = useTranslations('About.WhyUs')
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
        transition: { duration: 0.8 }
    }

    const reasons = [
        {
            icon: "ph:globe-stand-bold",
            color: "text-purple_blue",
            bgColor: "bg-purple_blue/5",
            span: "md:col-span-7",
            number: "01"
        },
        {
            icon: "ph:money-bold",
            color: "text-blue",
            bgColor: "bg-blue/5",
            span: "md:col-span-5",
            number: "02"
        },
        {
            icon: "ph:users-three-bold",
            color: "text-pale-yellow",
            bgColor: "bg-pale-yellow/5",
            span: "md:col-span-5",
            number: "03"
        },
        {
            icon: "ph:chart-line-up-bold",
            color: "text-green",
            bgColor: "bg-green/5",
            span: "md:col-span-7",
            number: "04"
        }
    ]

    return (
        <section className="py-24 relative bg-white dark:bg-dark_black overflow-hidden">
            <div className="container relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        className="text-purple_blue font-bold uppercase tracking-widest text-xs mb-4 block"
                    >
                        {t('title')}
                    </motion.span>

                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 text-dark_black dark:text-white leading-[1.1]">
                        <TextGenerateEffect words={t('subtitle')} delay={0.2} />
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-dark_black/60 dark:text-white/60 max-w-2xl"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                {/* Bento Grid Section */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-max">
                    {reasons.map((item, idx) => {
                        const reasonData = t.raw('reasons')[idx]
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                                className={`${item.span} relative group p-10 rounded-[3rem] ${item.bgColor} border border-dark_black/5 dark:border-white/5 overflow-hidden hover:bg-white dark:hover:bg-white/5 hover:shadow-2xl hover:shadow-purple_blue/5 transition-all duration-500`}
                            >
                                {/* Background Number */}
                                <span className="absolute -right-4 -bottom-4 text-[120px] font-bold text-dark_black/5 dark:text-white/5 group-hover:text-purple_blue/10 transition-colors duration-500 select-none">
                                    {item.number}
                                </span>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-14 h-14 bg-white dark:bg-dark_black rounded-2xl flex items-center justify-center mb-8 shadow-xl border border-dark_black/5 dark:border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                        <Icon icon={item.icon} className={`text-3xl ${item.color}`} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-dark_black dark:text-white group-hover:text-purple_blue transition-colors">
                                        {reasonData.title}
                                    </h3>

                                    <p className="text-lg text-dark_black/50 dark:text-white/50 leading-relaxed group-hover:text-dark_black/70 dark:group-hover:text-white/70 transition-colors">
                                        {reasonData.text}
                                    </p>
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple_blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Visual Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,rgba(102,102,255,0.05),transparent_60%)] pointer-events-none"></div>
        </section>
    )
}

export default WhyUs
