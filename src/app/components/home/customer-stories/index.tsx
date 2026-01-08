"use client"
import Image from 'next/image'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

function CustomerStories() {
  const t = useTranslations('CustomerStories');
  // Refs for each box
  const topLeftRef = useRef(null)
  const topRightRef = useRef(null)
  const bottomLeftRef = useRef(null)
  const bottomRightRef = useRef(null)

  // Detect if each box is in view
  const topLeftInView = useInView(topLeftRef, { once: true })
  const topRightInView = useInView(topRightRef, { once: true })
  const bottomLeftInView = useInView(bottomLeftRef, { once: true })
  const bottomRightInView = useInView(bottomRightRef, { once: true })

  return (
    <section className='overflow-hidden'>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                <TextGenerateEffect words={t('title1')} />
                <TextGenerateEffect
                  words={t('title2')}
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Top Left Box */}
                <motion.div
                  ref={topLeftRef}
                  initial={{ x: -100, y: -100, opacity: 0 }}
                  animate={topLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="p-8 md:gap-64 gap-10 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full xl:w-[70%] bg-cover bg-no-repeat"
                >
                  <span className="text-white/60 uppercase text-sm font-medium">
                    {t('label')}
                  </span>
                  <div className="flex flex-col gap-6">
                    <h5 className="text-white">
                      {t('story1.text')}
                    </h5>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">{t('story1.author')}</p>
                      <p className="text-white/60 text-sm font-medium">
                        {t('story1.position')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Top Right Box */}
                <motion.div
                  ref={topRightRef}
                  initial={{ x: 100, y: -100, opacity: 0 }}
                  animate={topRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between md:gap-36 gap-10 xl:w-[30%] rounded-2xl p-8 bg-[url('/images/testimoning/art-de-vivre.png')] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:rounded-2xl after:z-0"
                >
                  <div className="relative z-10">
                    <span className="uppercase text-sm font-medium text-white/80">
                      {t('facts_label')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 relative z-10 items-center text-center">
                    <Link
                      href={t('fact1.link')}
                      target="_blank"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark_black rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                    >
                      {t('fact1.text')}
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Bottom Left Box (Fact 2) */}
                <motion.div
                  ref={bottomLeftRef}
                  initial={{ x: -100, y: 100, opacity: 0 }}
                  animate={bottomLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between md:gap-36 gap-10 xl:w-[30%] rounded-2xl p-8 bg-[url('/images/testimoning/empreinte-finale.png')] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-black/40 after:rounded-2xl after:z-0"
                >
                  <div className="relative z-10">
                    <span className="uppercase text-sm font-medium text-white/80">
                      {t('facts_label')}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 relative z-10 items-center text-center">
                    <Link
                      href={t('fact2.link')}
                      target="_blank"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark_black rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
                    >
                      {t('fact2.text')}
                    </Link>
                  </div>
                </motion.div>

                {/* Bottom Right Box (Story 2) */}
                <motion.div
                  ref={bottomRightRef}
                  initial={{ x: 100, y: 100, opacity: 0 }}
                  animate={bottomRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col md:gap-64 gap-10 justify-between p-8 rounded-2xl xl:w-[70%] bg-[url('/images/testimoning/background-empreinte-finale.jpg')] bg-cover bg-center relative after:content-[''] after:absolute after:inset-0 after:bg-black/60 after:rounded-2xl after:z-0"
                >
                  <div className="flex flex-col gap-6 relative z-10">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      {t('label')}
                    </span>
                    <h5 className="text-white">
                      {t('story2.text')}
                    </h5>
                  </div>
                  <div className="flex flex-col gap-1 relative z-10">
                    <p className="text-white font-medium">{t('story2.author')}</p>
                    <p className="text-white/60 text-sm font-medium">
                      {t('story2.position')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories
