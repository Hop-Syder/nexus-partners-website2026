'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { useTranslations } from 'next-intl';

function NosProjets() {
  const t = useTranslations('NosProjets');
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [NosProjetsList, setNosProjetsList] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setNosProjetsList(data?.NosProjetsList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const bottomAnimation = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 + index * 0.2, },
  })

  return (
    <section id='work' className='relative overflow-hidden'>
      <div ref={ref} className='2xl:py-20 py-11 relative z-10'>
        <div className='container'>
          <div className='relative py-16 md:py-28 px-6 md:px-12 border border-dark_black/10 rounded-[3rem] bg-linear-to-br from-purple_blue/20 via-blue/15 to-green/10 backdrop-blur-xl dark:bg-white/5'>
            <div className='relative z-10 flex flex-col justify-center items-center gap-10 md:gap-20'>
              <div className='max-w-3xl text-center'>
                <h2 className='text-4xl md:text-6xl font-bold tracking-tight'>
                  <TextGenerateEffect words={t('title1')} duration={0.5} />
                  <TextGenerateEffect
                    words={t('title2')}
                    delay={1.2}
                    className="italic font-normal instrument-font"
                  />
                  <TextGenerateEffect words={t('title3')} duration={0.5} />
                </h2>
              </div>
              <div className='grid md:grid-cols-2 gap-x-10 gap-y-12 w-full'>
                {NosProjetsList?.map((items: any, index: number) => (
                  <motion.div
                    key={index}
                    className='group flex flex-col gap-6 cursor-pointer'
                    {...bottomAnimation(index)}
                  >
                    <div className='relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-purple_blue/20'>
                      <Image
                        src={items.image}
                        alt={items.title}
                        width={625}
                        height={410}
                        className='transition-transform duration-700 group-hover:scale-110'
                      />
                      <Link
                        href={items.link || '#'}
                        target='_blank'
                        className='absolute top-0 left-0 bg-dark_black/60 backdrop-blur-xs w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'
                      >
                        <div className='bg-brand-yellow p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl'>
                          <Icon
                            icon='icon-park-solid:circle-right-up'
                            width='40'
                            height='40'
                            style={{ color: '#1B1D1E' }}
                          />
                        </div>
                      </Link>
                    </div>

                    <div className='flex items-center justify-between gap-4 w-full'>
                      <h3 className='group-hover:text-purple_blue text-2xl font-bold transition-colors'>
                        {t(`tags.${items.title}`)}
                      </h3>
                      <div className='flex gap-3 flex-wrap'>
                        {items.tag?.map((tag: any, idx: number) => (
                          <p
                            key={idx}
                            className='text-xs font-bold uppercase tracking-wider border border-dark_black/10 dark:border-white/20 w-fit py-2 px-5 rounded-full bg-white/5 backdrop-blur-md group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-dark_black transition-all duration-300'
                          >
                            {t(`tags.${tag}`)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Projects Graphics - Positioned Left */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[30%] left-[-20%] md:left-[-15%] xl:left-[-18%] -translate-y-1/2 z-0 pointer-events-none opacity-40 md:opacity-60 xl:opacity-80 scale-75 md:scale-95 xl:scale-110"
            >
              <motion.div
                animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/home/solution.png"
                  alt="Nexus Projects Graphic"
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-2xl opacity-40 grayscale-[20%]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NosProjets
