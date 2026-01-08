'use client'
import { motion, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import SingleCreativeMind from './SingleCreativeMind'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function CreativeMind() {
  const t = useTranslations('CreativeMind');
  const ref = useRef(null)
  const inView = useInView(ref)
  const [creativeMindList, setcreativeMindList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/page-data')
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setcreativeMindList(data?.creativeMindList)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  const bottomAnimation = (index: any) => ({
    initial: { y: '5%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 0.4, delay: 0.4 + index * 0.3 },
  })
  return (
    <section id='team' className="relative overflow-hidden">
      <div ref={ref} className='2xl:py-20 py-11 relative z-10'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-3xl text-center'>
              <h2>
                <TextGenerateEffect words={t('title1')} duration={0.5} />
                <TextGenerateEffect
                  words={t('title2')}
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div className='flex flex-wrap justify-center gap-x-6 gap-y-8'>
              {creativeMindList?.map((item: any, index: any) => {
                return (
                  <motion.div {...bottomAnimation(index)} key={index}>
                    <SingleCreativeMind key={index} creativemind={item} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating CreativeMind Image (Responsive) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-[70%] right-[-25%] md:right-[-10%] xl:right-0 -translate-y-1/2 z-0 pointer-events-none opacity-40 md:opacity-60 xl:opacity-100 scale-75 md:scale-90 xl:scale-110"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/team/team.png"
            alt="Nexus Team Graphic"
            width={600}
            height={600}
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CreativeMind
