import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

const SingleCreativeMind = ({
    creativemind,
}: {
    creativemind: any
}) => {
    const t = useTranslations('CreativeMind');
    const { image, name, position, twitterLink, linkedinLink } = creativemind

    return (
        <div
            className='group flex flex-col md:flex-row gap-8 lg:gap-12 items-center justify-center max-w-4xl mx-auto'>
            <div className='w-full md:w-1/2 group-hover:grayscale transition-all duration-300'>
                <Image
                    src={image}
                    alt={name}
                    width={625}
                    height={410}
                    className='rounded-2xl w-full h-auto object-cover'
                />
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start'>
                <div className='flex flex-col gap-2 items-center md:items-start'>
                    <h3 className='text-3xl md:text-4xl font-medium whitespace-pre-line text-center md:text-left'>
                        {name}
                    </h3>
                    <p className='text-xl text-dark_black/60 dark:text-white/60 font-medium'>
                        {t(`positions.${position}`)}
                    </p>
                </div>
                <div className='flex gap-5'>
                    <Link
                        href={twitterLink}
                        className='group text-[#b1b1b1] hover:text-purple_blue transition-colors duration-200'>
                        <svg
                            width='24'
                            height='22'
                            viewBox='0 0 20 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M15.2707 0.586914H18.0819L11.9402 7.60649L19.1654 17.1586H13.5081L9.07712 11.3653L4.00705 17.1586H1.19412L7.76329 9.65033L0.832092 0.586914H6.63302L10.6383 5.88219L15.2707 0.586914ZM14.284 15.4759H15.8418L5.78659 2.18119H4.11498L14.284 15.4759Z'
                                fill='currentColor'
                            />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/nexus-partners-bj"
                        className='group hover:opacity-80 transition-opacity duration-200'>
                        <Image
                            src="/images/reseau/linkedin.png"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCreativeMind
