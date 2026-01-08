/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description CTA final avec formulaire de contact et boutons d'action.
 * @created 2026-01-03
 * @updated 2026-01-03
 * 🌐 ceo.nexus-partners.xyz
 */
'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

const ServiceFinalCTA = () => {
    const t = useTranslations('Services.FinalCTA')
    const [formData, setFormData] = useState({ name: '', email: '', need: 'visibility' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implémenter l'envoi du formulaire
        console.log('Form submitted:', formData)
    }

    return (
        <section className="py-24 bg-gradient-to-br from-purple_blue via-dark_black to-purple_blue relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[url('/images/bg-dots.png')] opacity-10"></div>

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-bold mb-6 text-white"
                        >
                            {t('title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl text-white/80"
                        >
                            {t('subtitle')}
                        </motion.p>
                    </div>

                    {/* Boutons d'action rapide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4 mb-16"
                    >
                        <a
                            href="https://wa.me/2290196701733"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-green rounded-full text-white font-bold hover:scale-105 transition-transform shadow-2xl hover:shadow-green/50"
                        >
                            <Image
                                src="/images/reseau/whatsapp.svg"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                                className="brightness-0 invert"
                            />
                            {t('buttons.whatsapp')}
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-yellow rounded-full text-dark_black font-bold hover:scale-105 transition-transform shadow-2xl hover:shadow-brand-yellow/30"
                        >
                            <Icon icon="ph:envelope-bold" className="text-2xl" />
                            {t('buttons.evaluation')}
                        </Link>
                        <a
                            href="tel:+2290196701733"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-full text-white font-bold border border-white/20 hover:bg-white/20 transition-all"
                        >
                            <Icon icon="ph:phone-bold" className="text-2xl" />
                            {t('buttons.call')}
                        </a>
                    </motion.div>

                    {/* Formulaire */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-10 border border-white/20"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-bold mb-2">{t('form.name')}</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-pale-yellow outline-none transition-all"
                                        placeholder="Jean Dupont"
                                    />
                                </div>
                                <div>
                                    <label className="block text-white font-bold mb-2">{t('form.email')}</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-pale-yellow outline-none transition-all"
                                        placeholder="contact@exemple.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-bold mb-2">{t('form.need')}</label>
                                <select
                                    value={formData.need}
                                    onChange={(e) => setFormData({ ...formData, need: e.target.value })}
                                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white focus:bg-white/20 focus:border-pale-yellow outline-none transition-all"
                                >
                                    <option value="visibility">{t('form.need_options.visibility')}</option>
                                    <option value="website">{t('form.need_options.website')}</option>
                                    <option value="automation">{t('form.need_options.automation')}</option>
                                    <option value="other">{t('form.need_options.other')}</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-5 bg-brand-yellow rounded-2xl text-dark_black font-bold text-lg hover:scale-[1.02] transition-transform shadow-2xl hover:shadow-brand-yellow/30 flex items-center justify-center gap-3"
                            >
                                {t('form.submit')}
                                <Icon icon="ph:paper-plane-tilt-bold" className="text-2xl" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ServiceFinalCTA
