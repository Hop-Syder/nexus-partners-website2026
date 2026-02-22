'use client'
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/service/faq";
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Magnetic from '@/app/components/ui/magnetic';
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect';
import Link from 'next/link';

export default function Page() {
    const t = useTranslations('ContactPage');

    return (
        <main className="relative overflow-hidden">
            {/* Hero Section */}
            <section className="pt-28 pb-16 md:pt-36 md:pb-24 text-center px-4 relative">
                <div className='absolute inset-0 bg-linear-to-b from-purple_blue/10 via-transparent to-transparent -z-10' />
                <div className="container max-w-4xl mx-auto flex flex-col items-center gap-6">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-dark_black dark:text-white">
                        <span className="block">{t('Hero.title')}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-dark_black/60 dark:text-white/60 max-w-2xl">
                        {t('Hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Main Content: Form & Info */}
            <section className="pb-24 px-4">
                <div className="container max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 xl:gap-24 items-start">
                        {/* Left Column: Contact Form */}
                        <div className="w-full">
                            <ContactForm />
                        </div>

                        {/* Right Column: Contact Info & Value Prop */}
                        <div className="flex flex-col gap-16 pt-8 lg:pt-12">
                            {/* Contact Details */}
                            <div className="flex flex-col gap-8">
                                <h2 className="text-3xl font-bold instrument-font italic text-brand-yellow">
                                    {t('ContactInfo.title')}
                                </h2>

                                <div className="flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                                            <Icon icon="ph:map-pin-bold" className="text-2xl text-brand-yellow" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-dark_black dark:text-white text-lg">{t('ContactInfo.address')}</span>
                                            <span className="text-dark_black/60 dark:text-white/60">{t('ContactInfo.schedule')}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                                            <Icon icon="ph:phone-bold" className="text-2xl text-brand-yellow" />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={`tel:${t('ContactInfo.phone').replace(/\s/g, '')}`} className="font-bold text-dark_black dark:text-white text-lg hover:text-brand-yellow transition-colors">
                                                {t('ContactInfo.phone')}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center shrink-0">
                                            <Icon icon="ph:envelope-bold" className="text-2xl text-brand-yellow" />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link href={`mailto:${t('ContactInfo.email')}`} className="font-bold text-dark_black dark:text-white text-lg hover:text-brand-yellow transition-colors">
                                                {t('ContactInfo.email')}
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 mt-4">
                                    <Link href="https://www.linkedin.com/company/nexus-partners-bj" target="_blank" className="w-10 h-10 rounded-full border border-dark_black/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 group">
                                        <Icon icon="ph:linkedin-logo-bold" className="text-lg text-dark_black dark:text-white group-hover:text-dark_black" />
                                    </Link>
                                    <Link href="https://wa.me/2290196701733" target="_blank" className="w-10 h-10 rounded-full border border-dark_black/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 group">
                                        <Icon icon="ph:whatsapp-logo-bold" className="text-lg text-dark_black dark:text-white group-hover:text-dark_black" />
                                    </Link>
                                </div>
                            </div>

                            {/* Trust Section */}
                            <div className="flex flex-col gap-8">
                                <h3 className="text-2xl font-bold dark:text-white">{t('Trust.title')}</h3>
                                <div className="grid gap-6">
                                    <div className="p-6 rounded-2xl bg-white/5 border border-dark_black/5 dark:border-white/5 backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Icon icon="ph:lightning-bold" className="text-brand-yellow text-xl" />
                                            <h4 className="font-bold">{t('Trust.responsiveness.title')}</h4>
                                        </div>
                                        <p className="text-sm text-dark_black/60 dark:text-white/60 pl-9">{t('Trust.responsiveness.desc')}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-dark_black/5 dark:border-white/5 backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Icon icon="ph:seal-check-bold" className="text-brand-yellow text-xl" />
                                            <h4 className="font-bold">{t('Trust.expertise.title')}</h4>
                                        </div>
                                        <p className="text-sm text-dark_black/60 dark:text-white/60 pl-9">{t('Trust.expertise.desc')}</p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-dark_black/5 dark:border-white/5 backdrop-blur-sm">
                                        <div className="flex items-center gap-4 mb-2">
                                            <Icon icon="ph:lock-key-bold" className="text-brand-yellow text-xl" />
                                            <h4 className="font-bold">{t('Trust.confidentiality.title')}</h4>
                                        </div>
                                        <p className="text-sm text-dark_black/60 dark:text-white/60 pl-9">{t('Trust.confidentiality.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Pro Max Design */}
            <section className="container max-w-7xl mx-auto px-4 pb-24">
                <div className="relative w-full h-[500px] rounded-[3rem] overflow-hidden border border-dark_black/10 dark:border-white/10 shadow-2xl group">
                    {/* Google Map Iframe with Dark filter overlay */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.8315132649!2d2.410188739501953!3d6.354146099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102355938569c73b%3A0xe447781b47781b4!2sHaie%20Vive%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="dark:opacity-80 transition-opacity duration-500"
                    ></iframe>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-dark_black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                    {/* Floating Location Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="absolute top-8 left-8 p-6 bg-white/10 dark:bg-dark_black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl max-w-xs z-20"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="size-10 rounded-full bg-brand-yellow flex items-center justify-center shrink-0">
                                <Icon icon="ph:map-pin-fill" className="text-dark_black text-xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Nexus Partners</h4>
                                <p className="text-xs text-white/60">Quartier Haie Vive, Cotonou</p>
                            </div>
                        </div>

                        <p className="text-sm text-white/80 mb-6">
                            Venez nous rencontrer pour discuter de votre prochain projet ambitieux.
                        </p>

                        <Magnetic>
                            <a
                                href="https://goo.gl/maps/YOUR_LINK_HERE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-brand-yellow rounded-xl text-dark_black font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-brand-yellow/20 transition-all"
                            >
                                <Icon icon="ph:navigation-arrow-fill" />
                                Itinéraire
                            </a>
                        </Magnetic>
                    </motion.div>

                    {/* Gradient decorations inside map frame */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 blur-[100px] pointer-events-none" />
                </div>
            </section>

            <Faq />
        </main>
    );
};
