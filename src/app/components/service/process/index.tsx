/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Timeline horizontale du processus en 4 étapes.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexuspartners.xyz
 */
'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

const ServiceProcess = () => {
    const t = useTranslations('Services.Process')
    const steps = t.raw('steps')

    const stepIcons = [
        'ph:chat-circle-dots-bold',
        'ph:file-text-bold',
        'ph:rocket-launch-bold',
        'ph:chart-line-up-bold'
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-[#FDFDFD] to-purple_blue/5 dark:from-dark_black/50 dark:to-purple_blue/10">
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-dark_black dark:text-white"
                    >
                        {t('title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-purple_blue font-semibold"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>

                {/* Timeline Desktop */}
                <div className="hidden md:block relative max-w-7xl mx-auto">
                    {/* Ligne connectrice */}
                    <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-purple_blue via-pale-yellow to-green"></div>

                    <div className="grid grid-cols-4 gap-8">
                        {steps.map((step: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="relative flex flex-col items-center"
                            >
                                {/* Step number cercle */}
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple_blue to-pale-yellow flex items-center justify-center shadow-2xl mb-6 relative z-10">
                                    <Icon icon={stepIcons[idx]} className="text-4xl text-white" />
                                </div>

                                {/* Badge numéro */}
                                <div className="absolute top-0 right-1/3 w-8 h-8 rounded-full bg-pale-yellow text-dark_black font-bold flex items-center justify-center text-sm shadow-lg z-20">
                                    {idx + 1}
                                </div>

                                {/* Contenu */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-3 text-dark_black dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-dark_black/70 dark:text-white/70">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Timeline Mobile */}
                <div className="md:hidden space-y-8">
                    {steps.map((step: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple_blue to-pale-yellow flex items-center justify-center shadow-xl relative">
                                <Icon icon={stepIcons[idx]} className="text-2xl text-white" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pale-yellow text-dark_black font-bold flex items-center justify-center text-xs">
                                    {idx + 1}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold mb-2 text-dark_black dark:text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-dark_black/70 dark:text-white/70">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceProcess
