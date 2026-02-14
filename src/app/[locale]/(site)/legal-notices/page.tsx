/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page des mentions légales (Legal Notices)
 * @created 2026-02-14
 * @updated 2026-02-14
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/

import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'LegalNotices' });
    return {
        title: t('title'),
    };
}

export default function LegalNoticesPage() {
    const t = useTranslations('LegalNotices');

    return (
        <section>
            <div className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            {t('title')}
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl flex flex-col gap-6">
                            <div className="text-opacity-60 flex flex-col gap-4">
                                <h2 className="text-2xl font-semibold text-dark_black dark:text-white">{t('publisher.title')}</h2>
                                <p>{t('publisher.name')}</p>
                                <p>{t('publisher.status')}</p>
                                <p>{t('publisher.address')}</p>
                                <p>{t('publisher.email')}</p>
                                <p>{t('publisher.phone')}</p>
                            </div>

                            <div className="text-opacity-60 flex flex-col gap-4 border-t border-dark_black/10 dark:border-white/10 pt-6">
                                <h2 className="text-2xl font-semibold text-dark_black dark:text-white">{t('hosting.title')}</h2>
                                <p>{t('hosting.name')}</p>
                                <p>{t('hosting.address')}</p>
                            </div>

                            <div className="text-opacity-60 flex flex-col gap-4 border-t border-dark_black/10 dark:border-white/10 pt-6">
                                <h2 className="text-2xl font-semibold text-dark_black dark:text-white">{t('property.title')}</h2>
                                <p>{t('property.text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
