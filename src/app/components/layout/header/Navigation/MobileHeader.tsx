

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const MobileHeader: React.FC<{ item: any }> = ({ item }) => {
    const t = useTranslations('Layout.header.menu');

    return (
        <>
            <Link href={item.href} className="text-black dark:text-white rounded-md text-base font-medium ">
                <li className={`rounded-md w-full p-2 px-4`}>
                    {t(item.label)}
                </li>
            </Link>
        </>
    );
};

export default MobileHeader;
