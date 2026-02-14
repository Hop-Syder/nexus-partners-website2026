'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { useTranslations } from 'next-intl';

function Solutions() {
  const t = useTranslations('Solutions');
  const ref = useRef(null)
  const inView = useInView(ref)

  const bottomAnimation = {
    initial: { y: '5%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section className='relative overflow-hidden'>
      <div className='2xl:py-20 py-11 relative z-10'>
        <div className='container'>
          <div
            ref={ref}
            className='relative py-16 md:py-28 px-6 border border-dark_black/10 rounded-[3rem] bg-linear-to-br from-purple_blue/20 via-blue/15 to-green/10 backdrop-blur-xl dark:bg-white/5'>

            <motion.div
              {...bottomAnimation}
              className='relative z-10 flex flex-col gap-8 items-center md:max-w-3xl mx-auto'>
              <div className='flex flex-col gap-4 items-center text-center'>
                <h2 className='text-4xl md:text-6xl font-bold tracking-tight'>
                  <TextGenerateEffect words={t('title1')} />
                  <TextGenerateEffect
                    words={t('title2')}
                    delay={1}
                    className="italic font-normal instrument-font"
                  />
                </h2>
                <p className='text-lg md:text-xl text-dark_black/70 dark:text-white/70 max-w-2xl'>
                  {t('description')}
                </p>
              </div>
              <Link
                href='https://forms.office.com/r/3FWqQ2n2YT'
                className='group w-fit text-dark_black font-bold bg-brand-yellow rounded-full flex items-center gap-4 py-3 pl-6 pr-3 hover:bg-transparent border border-brand-yellow transition-all duration-300 hover:text-brand-yellow shadow-xl hover:shadow-brand-yellow/20'>
                <span className='group-hover:translate-x-9 transform transition-transform duration-300 ease-in-out'>
                  {t('cta')}
                </span>
                <svg
                  width='36'
                  height='36'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='group-hover:-translate-x-40 transition-all duration-300 ease-in-out group-hover:rotate-45'>
                  <rect
                    width='32'
                    height='32'
                    rx='16'
                    fill='white'
                    className='fill-white transition-colors duration-300 ease-in-out group-hover:fill-brand-yellow'
                  />
                  <path
                    d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                    stroke='#1B1D1E'
                    strokeWidth='1.6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='stroke-[#1B1D1E] transition-colors duration-300 ease-in-out'
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Floating Solutions Image (Layered between BG and Text) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[40%] md:top-[50%] left-[-15%] md:left-[-5%] xl:left-auto xl:right-[-15%] -translate-y-1/2 z-0 pointer-events-none opacity-40 md:opacity-60 xl:opacity-90 scale-75 md:scale-90 xl:scale-110"
            >
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/home/solution.png"
                  alt="Nexus Solutions Graphic"
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
