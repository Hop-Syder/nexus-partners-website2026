/**
 * @author @hopsyder
 * @organization Nexus Partners
 * @description Page de la politique de confidentialité (Privacy Policy)
 * @created 2026-02-14
 * @updated 2026-02-14
 * 🌐 ceo.nexuspartners.xyz
 * 📧 daoudaabassichristian@gmail.com
*/

import { Metadata } from "next";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });
    return {
        title: t('title'),
    };
}

export default function PrivacyPolicyPage() {
    const t = useTranslations('PrivacyPolicy');

    return (
        <section>
            <div
                className="relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10"
            >
                <div className="container relative z-10">
                    <div className='flex flex-col gap-5'>
                        <h1 className='md:text-6xl text-4xl font-medium text-center'>
                            {t('title')}
                        </h1>
                        <div className="bg-white dark:bg-dark_black p-8 rounded-2xl flex flex-col gap-6">
                            <p className="text-opacity-60">
                                {t('intro')}
                            </p>

                            <div className="my-6">
                                <h4 className="font-semibold">{t('collection.title')}</h4>
                                <p className="mt-6 text-opacity-60">
                                    {t('collection.text')}
                                </p>
                            </div>

                            <p className="text-opacity-60">{t('consent')}</p>

                            <p className="text-opacity-60">
                                <Link href="/" className="text-dark_black dark:text-white underline font-medium">Nexus Partners</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

