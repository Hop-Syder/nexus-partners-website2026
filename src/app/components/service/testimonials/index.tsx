/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Témoignages style CustomerStories avec animations x/y.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React, { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'motion/react'
import { Icon } from '@iconify/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'

const ServiceTestimonials = () => {
    const t = useTranslations('Services.Testimonials')
    const testimonials = t.raw('items')
    const ref = useRef(null)
    const inView = useInView(ref)

    const animationVariants = [
        { initial: { x: -100, y: 50, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 } },
        { initial: { x: 0, y: -50, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 } },
        { initial: { x: 100, y: 50, opacity: 0 }, animate: { x: 0, y: 0, opacity: 1 } }
    ]

    return (
        <section className="py-24 bg-dark_black text-white relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,102,255,0.1),transparent_70%)]"></div>

            <div className="container relative z-10">
                <motion.div
                    {...{ initial: { y: '25%', opacity: 0 }, animate: inView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 }, transition: { duration: 0.3, delay: 0.3 } }}
                    className='max-w-3xl text-center mx-auto mb-20'
                >
                    <h2>
                        <TextGenerateEffect words={t('title')} delay={0.4} />
                    </h2>
                </motion.div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={animationVariants[idx].initial}
                            animate={inView ? animationVariants[idx].animate : animationVariants[idx].initial}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: 'easeOut' }}
                            className="relative p-8 rounded-[2.5rem] bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-pale-yellow/50 transition-all duration-500 group"
                        >
                            {/* Quote Icon */}
                            <Icon icon="ph:quotes-bold" className="text-6xl text-purple_blue/20 mb-6" />

                            {/* Quote */}
                            <p className="text-xl italic mb-8 leading-relaxed text-white/90 group-hover:text-white transition-colors">
                                "{testimonial.quote}"
                            </p>

                            {/* Metric Badge */}
                            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pale-yellow/20 to-purple_blue/20 border border-pale-yellow/30 mb-6">
                                <Icon icon="ph:trend-up-bold" className="text-pale-yellow text-xl" />
                                <span className="font-bold text-pale-yellow">{testimonial.metric}</span>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-12 bg-purple_blue rounded-full"></div>
                                <div>
                                    <p className="font-bold text-white">{testimonial.author}</p>
                                    <p className="text-sm text-white/60">Client Nexus Partners</p>
                                </div>
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

export default ServiceTestimonials
