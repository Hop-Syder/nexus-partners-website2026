/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Bento Grid asymétrique pour les services (style Innovation Home).
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'motion/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const ServiceCards = () => {
    const t = useTranslations('Services.ServiceCards')
    const ref = useRef(null)
    const inView = useInView(ref)

    const services = [
        {
            key: 'web',
            icon: 'ph:browser-bold',
            color: 'text-purple_blue',
            bgColor: 'bg-gradient-to-br from-purple_blue/10 to-purple_blue/5',
            span: 'md:col-span-2 md:row-span-2' // Featured large card
        },
        {
            key: 'seo',
            icon: 'ph:magnifying-glass-plus-bold',
            color: 'text-green',
            bgColor: 'bg-gradient-to-br from-green/10 to-green/5',
            span: 'md:col-span-1 md:row-span-1'
        },
        {
            key: 'automation',
            icon: 'ph:whatsapp-logo-bold',
            color: 'text-blue',
            bgColor: 'bg-gradient-to-br from-blue/10 to-blue/5',
            span: 'md:col-span-1 md:row-span-1'
        },
        {
            key: 'ai',
            icon: 'ph:brain-bold',
            color: 'text-pale-yellow',
            bgColor: 'bg-gradient-to-br from-pale-yellow/10 to-pale-yellow/5',
            span: 'md:col-span-1 md:row-span-1'
        }
    ]

    return (
        <section className="py-24 bg-white dark:bg-dark_black relative overflow-hidden">
            <div className="container">
                <motion.div
                    {...{ initial: { y: '25%', opacity: 0 }, animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 }, transition: { duration: 0.3, delay: 0.3 } }}
                    className='max-w-3xl text-center mx-auto mb-20'
                >
                    <h2>
                        <TextGenerateEffect words={t('title')} delay={0.4} />
                    </h2>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[280px] gap-6 max-w-7xl mx-auto">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.key}
                            className={`${service.span} ${service.bgColor} flex flex-col p-8 md:p-10 rounded-[2.5rem] gap-6 border border-dark_black/5 dark:border-white/5 hover:border-pale-yellow hover:shadow-2xl hover:shadow-pale-yellow/10 transition-all duration-500 group relative overflow-hidden`}
                            initial={{ scale: 1.2, opacity: 0, filter: 'blur(8px)' }}
                            animate={inView ? { scale: 1, opacity: 1, filter: 'blur(0px)' } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + idx * 0.2, ease: 'easeInOut' }}
                        >
                            {/* Icon avec calque blanc */}
                            <div className="w-16 h-16 bg-white dark:bg-dark_black rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-dark_black/5 dark:border-white/10">
                                {service.key === 'automation' ? (
                                    <Image
                                        src="/images/reseau/whatsapp.svg"
                                        alt="WhatsApp"
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                ) : (
                                    <Icon icon={service.icon} className={`text-3xl ${service.color}`} />
                                )}
                            </div>

                            {/* Contenu */}
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-dark_black dark:text-white group-hover:text-purple_blue transition-colors">
                                        {t(`cards.${service.key}.title`)}
                                    </h3>

                                    <p className="text-base text-dark_black/70 dark:text-white/70 mb-3 leading-relaxed">
                                        {t(`cards.${service.key}.description`)}
                                    </p>

                                    {/* Featured card gets more content */}
                                    {idx === 0 && (
                                        <>
                                            <p className="text-sm font-bold text-purple_blue mb-3">
                                                ✓ {t(`cards.${service.key}.benefits`)}
                                            </p>

                                            <div className="bg-pale-yellow/10 border-l-4 border-pale-yellow p-3 rounded-r-xl mb-4">
                                                <p className="text-xs italic text-dark_black/80 dark:text-white/80">
                                                    💡 {t(`cards.${service.key}.example`)}
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <Link
                                    href='/contact'
                                    className="inline-flex items-center gap-2 text-purple_blue font-bold group-hover:gap-4 transition-all mt-auto"
                                >
                                    {t(`cards.${service.key}.cta`)}
                                    <Icon icon="ph:arrow-right-bold" />
                                </Link>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-pale-yellow/0 via-purple_blue/0 to-pale-yellow/0 group-hover:from-pale-yellow/5 group-hover:via-purple_blue/5 group-hover:to-pale-yellow/5 transition-all duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceCards
