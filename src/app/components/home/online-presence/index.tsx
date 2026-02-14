'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect'
import { useTranslations } from 'next-intl'

/** Parse la description projet en intro + sections Framework & Fonctionnalités */
function parseProjectDescription(description: string): {
  intro: string
  frameworkTitle: string
  frameworkItems: string[]
  featuresTitle: string
  featuresItems: string[]
} {
  const blocks = description.split(/\n\n+/)
  let intro = ''
  let frameworkTitle = 'Framework & stack utilisés'
  let frameworkItems: string[] = []
  let featuresTitle = 'Fonctionnalités intégrées'
  let featuresItems: string[] = []

  const extractList = (text: string): string[] =>
    text.split(/\n/).filter((line) => line.trim().startsWith('•')).map((line) => line.replace(/^•\s*/, '').trim())

  for (const block of blocks) {
    const trimmed = block.trim()
    if (!trimmed) continue
    if (trimmed.toLowerCase().includes('framework') && trimmed.toLowerCase().includes('stack')) {
      const [first, ...rest] = trimmed.split(/\n/)
      frameworkTitle = first.replace(/\s*:\s*$/, '')
      frameworkItems = extractList(trimmed)
      if (frameworkItems.length === 0) frameworkItems = rest.filter((l) => l.trim()).map((l) => l.replace(/^•\s*/, '').trim())
    } else if (trimmed.toLowerCase().includes('fonctionnalités')) {
      const [first, ...rest] = trimmed.split(/\n/)
      featuresTitle = first.replace(/\s*:\s*$/, '')
      featuresItems = extractList(trimmed)
      if (featuresItems.length === 0) featuresItems = rest.filter((l) => l.trim()).map((l) => l.replace(/^•\s*/, '').trim())
    } else if (!frameworkItems.length && !featuresItems.length) {
      intro = intro ? `${intro}\n\n${trimmed}` : trimmed
    }
  }

  if (!intro && blocks.length > 0) {
    const first = blocks[0].trim()
    if (!first.toLowerCase().includes('framework') && !first.toLowerCase().includes('fonctionnalités')) intro = first
  }
  return { intro, frameworkTitle, frameworkItems, featuresTitle, featuresItems }
}

function NosProjets() {
  const t = useTranslations('NosProjets');
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [NosProjetsList, setNosProjetsList] = useState<any>(null)
  const [modalProjectIndex, setModalProjectIndex] = useState<number | null>(null)

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalProjectIndex(null)
    }
    if (modalProjectIndex !== null) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [modalProjectIndex])

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

                    {/* Desktop: h3, bouton Plus, tags sur une ligne | Mobile: ligne 1 = h3, ligne 2 = bouton + tags */}
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4 w-full'>
                      <h3 className='group-hover:text-purple_blue text-2xl font-bold transition-colors'>
                        {t(`tags.${items.title}`)}
                      </h3>
                      <div className='flex flex-wrap items-center gap-3'>
                        {items.description && (
                          <button
                            type='button'
                            aria-label='Voir les détails du projet'
                            onClick={(e) => {
                              e.stopPropagation()
                              setModalProjectIndex(index)
                            }}
                            className='text-xs font-semibold flex items-center gap-1.5 px-4 py-2 rounded-full border border-dark_black/10 dark:border-white/20 bg-white/40 dark:bg-white/5 hover:bg-brand-yellow hover:text-dark_black hover:border-brand-yellow transition-all duration-300'
                          >
                            Plus
                            <Icon icon='tabler:plus' width='14' height='14' />
                          </button>
                        )}
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

                    {/* Popup détails projet */}
                    {modalProjectIndex === index && items.description && (() => {
                      const parsed = parseProjectDescription(items.description)
                      return (
                        <div
                          className='fixed inset-0 z-50 flex items-center justify-center p-4'
                          role='dialog'
                          aria-modal='true'
                          aria-labelledby='project-detail-title'
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='absolute inset-0 bg-dark_black/70 dark:bg-black/60 backdrop-blur-md'
                            onClick={() => setModalProjectIndex(null)}
                            aria-hidden='true'
                          />
                          <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className='relative z-10 w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl border border-dark_black/10 dark:border-white/10 bg-white dark:bg-dark_black shadow-2xl dark:shadow-none flex flex-col'
                          >
                            {/* En-tête avec accent */}
                            <div className='relative flex items-start justify-between gap-4 p-5 md:p-6 bg-linear-to-br from-purple_blue/15 via-blue/10 to-green/10 dark:from-purple_blue/20 dark:via-blue/15 dark:to-green/15 border-b border-dark_black/5 dark:border-white/10'>
                              <div className='min-w-0 flex-1'>
                                <span className='text-xs font-semibold tracking-[0.2em] uppercase text-purple_blue dark:text-brand-yellow mb-1 block'>
                                  Détails du projet
                                </span>
                                <h3 id='project-detail-title' className='text-xl md:text-2xl font-bold text-dark_black dark:text-white'>
                                  {t(`tags.${items.title}`)}
                                </h3>
                              </div>
                              <button
                                type='button'
                                aria-label='Fermer'
                                onClick={(e) => { e.stopPropagation(); setModalProjectIndex(null) }}
                                className='shrink-0 p-2.5 rounded-xl border border-dark_black/10 dark:border-white/20 hover:bg-brand-yellow hover:border-brand-yellow hover:text-dark_black transition-all'
                              >
                                <Icon icon='tabler:x' width='22' height='22' />
                              </button>
                            </div>

                            <div className='p-5 md:p-6 overflow-y-auto'>
                              {parsed.intro && (
                                <p className='text-base text-dark_black/85 dark:text-white/85 leading-relaxed' style={{ marginBottom: '2rem' }}>
                                  {parsed.intro}
                                </p>
                              )}

                              {parsed.frameworkItems.length > 0 && (
                                <div className='rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 md:p-5' style={{ marginBottom: '2rem' }}>
                                  <div className='flex items-center gap-2 mb-4'>
                                    <span className='flex items-center justify-center w-9 h-9 rounded-xl bg-purple_blue/15 dark:bg-purple_blue/25 text-purple_blue'>
                                      <Icon icon='tabler:code' width='20' height='20' />
                                    </span>
                                    <h4 className='text-sm font-bold uppercase tracking-wider text-dark_black dark:text-white'>
                                      {parsed.frameworkTitle}
                                    </h4>
                                  </div>
                                  <ul className='list-none p-0 m-0'>
                                    {parsed.frameworkItems.map((item, i) => (
                                      <li
                                        key={i}
                                        className='flex gap-3 text-sm text-dark_black/80 dark:text-white/80'
                                        style={{ marginBottom: i < parsed.frameworkItems.length - 1 ? '1.25rem' : 0 }}
                                      >
                                        <span className='text-brand-yellow mt-1 shrink-0' aria-hidden>•</span>
                                        <span className='leading-relaxed'>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {parsed.featuresItems.length > 0 && (
                                <div className='rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-4 md:p-5' style={{ marginBottom: 0 }}>
                                  <div className='flex items-center gap-2 mb-4'>
                                    <span className='flex items-center justify-center w-9 h-9 rounded-xl bg-green/15 dark:bg-green/25 text-green'>
                                      <Icon icon='tabler:tool' width='20' height='20' />
                                    </span>
                                    <h4 className='text-sm font-bold uppercase tracking-wider text-dark_black dark:text-white'>
                                      {parsed.featuresTitle}
                                    </h4>
                                  </div>
                                  <ul className='list-none p-0 m-0'>
                                    {parsed.featuresItems.map((item, i) => (
                                      <li
                                        key={i}
                                        className='flex gap-3 text-sm text-dark_black/80 dark:text-white/80'
                                        style={{ marginBottom: i < parsed.featuresItems.length - 1 ? '1.25rem' : 0 }}
                                      >
                                        <span className='text-brand-yellow mt-1 shrink-0' aria-hidden>•</span>
                                        <span className='leading-relaxed'>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </div>
                      )
                    })()}
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
                  src="/images/home/nosprojet.png"
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
