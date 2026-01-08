'use client';

import { useLocale } from 'next-intl';
import { routing, usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    function onSelectChange(nextLocale: string) {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="flex gap-1 md:gap-2">
            {routing.locales.map((cur) => (
                <button
                    key={cur}
                    className={`px-1.5 md:px-3 py-1 rounded-full text-[10px] md:text-sm font-medium transition-all duration-200 ${locale === cur
                        ? 'bg-brand-yellow text-dark_black'
                        : 'text-dark_black/60 dark:text-white/60 hover:bg-brand-yellow/10'
                        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => onSelectChange(cur)}
                    disabled={isPending}
                >
                    {cur.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
