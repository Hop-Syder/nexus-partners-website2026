/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Section Solutions Premium avec Glassmorphism V2.
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

const Solutions = () => {
    const tServices = useTranslations('Innovation')

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    }

    const solutionsList = [
        { icon: 'ph:globe-bold', title: tServices('services.web_development'), color: 'text-purple_blue', bg: 'bg-purple_blue/5' },
        { icon: 'ph:magnifying-glass-bold', title: tServices('services.seo_local'), color: 'text-pale-yellow', bg: 'bg-pale-yellow/5' },
        { icon: 'ph:whatsapp-logo-bold', title: tServices('services.whatsapp_automation'), color: 'text-green', bg: 'bg-green/5' },
        { icon: 'ph:robot-bold', title: 'Mini-IA & Analyses', color: 'text-blue', bg: 'bg-blue/5' },
        { icon: 'ph:chart-line-up-bold', title: tServices('services.brand_strategy'), color: 'text-orange', bg: 'bg-orange/5' },
    ]

    return (
        <section className="py-20 bg-dark_black relative overflow-hidden rounded-[4rem] mx-4 my-10">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(102,102,255,0.05),transparent_70%)]"></div>

            <div className="container relative z-10">
                <motion.div {...fadeIn} className="text-center mb-24 max-w-3xl mx-auto">
                    <span className="text-purple_blue font-bold uppercase tracking-widest text-xs mb-4 block">Notre Expertise</span>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                        Des architectures pensées <br />
                        <span className="text-white/20 italic instrument-font font-normal">pour la conversion</span>
                    </h2>
                    <p className="text-white/50 text-xl leading-relaxed">
                        Chaque ligne de code est une opportunité de croissance pour votre entreprise.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {solutionsList.map((item, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeIn}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-purple_blue/30 transition-all duration-500 text-center flex flex-col items-center gap-6"
                        >
                            {/* White Layer for Icon as requested */}
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                {item.icon === 'ph:whatsapp-logo-bold' ? (
                                    <Image
                                        src="/images/reseau/whatsapp.svg"
                                        alt="WhatsApp"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                ) : (
                                    <Icon icon={item.icon} className={`text-3xl ${item.color}`} />
                                )}
                            </div>

                            <h3 className="font-bold text-white text-lg group-hover:text-purple_blue transition-colors">
                                {item.title}
                            </h3>

                            {/* Decorative line */}
                            <div className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-purple_blue transition-all"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient Light */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple_blue/20 blur-[120px] rounded-full"></div>
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue/10 blur-[120px] rounded-full"></div>
        </section>
    )
}

export default Solutions
