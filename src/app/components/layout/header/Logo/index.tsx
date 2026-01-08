import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/">
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={117}
                height={34}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                priority={true}
                className='dark:hidden max-w-[100px] md:max-w-[94px] lg:max-w-[200px]'
            />
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={160}
                height={50}
                style={{ width: 'auto', height: 'auto' }}
                quality={100}
                className='dark:block hidden max-w-[120px] md:max-w-[128px] lg:max-w-[200px]'
            />
        </Link>
    );
};

export default Logo;
