'use client'
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/service/faq";
import { Icon } from '@iconify/react';
import { useTranslations } from 'next-intl';
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

            {/* Map Placeholder Section */}
            <section className="w-full h-[400px] bg-dark_black/5 dark:bg-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="bg-white dark:bg-dark_black px-8 py-4 rounded-full shadow-2xl z-10 flex items-center gap-3">
                    <Icon icon="ph:map-pin-fill" className="text-brand-yellow text-2xl" />
                    <span className="font-bold text-lg">Cotonou, Bénin</span>
                </div>
            </section>

            <Faq />
        </main>
    );
};
