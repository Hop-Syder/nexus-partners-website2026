/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description CTA final avec design Bento "Pro Max", formulaire et actions rapides.
 * @created 2026-02-22
 * @updated 2026-02-22
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'
import { Link } from '@/i18n/routing'
import Magnetic from '../../ui/magnetic'

const ServiceFinalCTA = () => {
    const t = useTranslations('Services.FinalCTA')
    const [formData, setFormData] = useState({ name: '', email: '', need: 'visibility' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implémenter l'envoi du formulaire
        console.log('Form submitted:', formData)
    }

    return (
        <section className="py-24 bg-dark_black relative overflow-hidden">
            {/* Elements de fond */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 blur-[150px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple_blue/5 blur-[150px] -ml-64 -mb-64" />

            <div className="container relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* 1. Bloc En-tête (Large) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center"
                        >
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                                {t('title')}
                            </h2>
                            <p className="text-xl text-white/60 mb-8 max-w-xl">
                                {t('subtitle')}
                            </p>

                            <div className="flex flex-wrap gap-4 mt-auto">
                                <Magnetic>
                                    <a href="tel:+2290196701733" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                                        <Icon icon="ph:phone-bold" className="text-xl" />
                                        {t('buttons.call')}
                                    </a>
                                </Magnetic>
                                <Magnetic>
                                    <Link href="/contact" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
                                        <Icon icon="ph:envelope-bold" className="text-xl" />
                                        {t('buttons.evaluation')}
                                    </Link>
                                </Magnetic>
                            </div>
                        </motion.div>

                        {/* 2. Bloc Satellite WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-green/10 border border-green/20 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center group cursor-pointer transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-green rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green/20 group-hover:scale-110 transition-transform">
                                <Icon icon="logos:whatsapp-icon" className="text-3xl brightness-0 invert" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('buttons.whatsapp')}</h3>
                            <p className="text-white/60 text-sm mb-6">Réponse rapide garantie</p>
                            <Magnetic>
                                <a
                                    href="https://wa.me/2290196701733"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-green rounded-2xl text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-green/20"
                                >
                                    Discuter
                                    <Icon icon="ph:arrow-up-right-bold" />
                                </a>
                            </Magnetic>
                        </motion.div>

                        {/* 3. Bloc Formulaire (Large - Bas) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 instrument-font italic">Prenez une longueur d'avance</h3>
                                    <p className="text-white/60 mb-8">
                                        Remplissez ce court formulaire et nous reviendrons vers vous avec une stratégie personnalisée sous 24h.
                                    </p>

                                    <ul className="space-y-4">
                                        {[
                                            "Audit gratuit de votre présence digitale",
                                            "Devis transparent et sans engagement",
                                            "Expertise locale basée à Cotonou"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white/80">
                                                <div className="size-5 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                                                    <Icon icon="ph:check-bold" className="text-brand-yellow text-xs" />
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-brand-yellow transition-all outline-none"
                                            placeholder={t('form.name')}
                                        />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:bg-white/10 focus:border-brand-yellow transition-all outline-none"
                                            placeholder={t('form.email')}
                                        />
                                    </div>
                                    <select
                                        value={formData.need}
                                        onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                                        className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:bg-white/10 focus:border-brand-yellow transition-all outline-none appearance-none"
                                    >
                                        <option value="visibility" className="bg-dark_black">{t('form.need_options.visibility')}</option>
                                        <option value="website" className="bg-dark_black">{t('form.need_options.website')}</option>
                                        <option value="automation" className="bg-dark_black">{t('form.need_options.automation')}</option>
                                        <option value="other" className="bg-dark_black">{t('form.need_options.other')}</option>
                                    </select>
                                    <Magnetic>
                                        <button
                                            type="submit"
                                            className="w-full py-5 bg-brand-yellow rounded-xl text-dark_black font-bold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-brand-yellow/20 transition-all active:scale-[0.98]"
                                        >
                                            {t('form.submit')}
                                            <Icon icon="ph:paper-plane-tilt-bold" className="text-2xl" />
                                        </button>
                                    </Magnetic>
                                </form>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFinalCTA
