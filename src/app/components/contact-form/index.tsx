'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

function ContactForm() {
  const t = useTranslations('ContactForm');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'partnership',
    message: '',
    consent: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!formData.consent) return;

    setLoader(true)

    fetch('https://formsubmit.co/ajax/daoudaabassichristian@gmail.com', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success)
        setLoader(false)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          subject: 'partnership',
          message: '',
          consent: false
        })
      })
      .catch((error) => {
        console.error(error.message)
        setLoader(false)
      })
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='flex flex-col items-center gap-8 text-center p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl h-full justify-center'>
        <div className='w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-xl shadow-brand-yellow/20'>
          <Icon
            icon='ph:check-bold'
            width='48'
            height='48'
            className='text-dark_black'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold text-white'>{t('success.title')}</h3>
          <p className='text-lg text-white/70 max-w-sm'>
            {t('success.message')}
          </p>
        </div>

        <Link
          href='/'
          className='group w-fit text-dark_black font-bold bg-brand-yellow rounded-full flex items-center gap-4 py-3 pl-6 pr-3 hover:bg-transparent border border-brand-yellow transition-all duration-300 hover:text-brand-yellow shadow-xl hover:shadow-brand-yellow/20'>
          <span className='group-hover:translate-x-9 transform transition-transform duration-300 ease-in-out'>
            {t('success.cta')}
          </span>
          <div className='bg-white rounded-full p-2 group-hover:bg-brand-yellow transition-colors duration-300'>
            <Icon icon="ph:arrow-right-bold" className="text-xl text-dark_black" />
          </div>
        </Link>
      </motion.div>
    )
  }

  return (
    <div className='relative w-full'>
      <div className='bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden'>
        <h3 className="text-2xl font-bold text-white mb-8 instrument-font italic">{t('title')}</h3>

        <form onSubmit={handleSubmit} className='flex flex-col gap-6 md:gap-8'>
          {/* Row 1: Name & Company */}
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='name'>
                {t('labels.name')}
              </label>
              <input
                className='w-full rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white placeholder:text-white/20 text-sm'
                id='name'
                type='text'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t('placeholders.name')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='company'>
                {t('labels.company')}
              </label>
              <input
                className='w-full rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white placeholder:text-white/20 text-sm'
                id='company'
                type='text'
                name='company'
                value={formData.company}
                onChange={handleChange}
                placeholder={t('placeholders.company')}
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='email'>
                {t('labels.email')}
              </label>
              <input
                className='w-full rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white placeholder:text-white/20 text-sm'
                id='email'
                type='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                placeholder={t('placeholders.email')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='phone'>
                {t('labels.phone')}
              </label>
              <input
                className='w-full rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white placeholder:text-white/20 text-sm'
                id='phone'
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('placeholders.phone')}
              />
            </div>
          </div>

          {/* Row 3: Subject */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='subject'>
              {t('labels.subject')}
            </label>
            <div className='relative'>
              <select
                className='w-full appearance-none rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white text-sm'
                name='subject'
                id='subject'
                value={formData.subject}
                onChange={handleChange}>
                <option className='bg-dark_black' value='partnership'>{t('subjects.partnership')}</option>
                <option className='bg-dark_black' value='quote'>{t('subjects.quote')}</option>
                <option className='bg-dark_black' value='recruitment'>{t('subjects.recruitment')}</option>
                <option className='bg-dark_black' value='press'>{t('subjects.press')}</option>
                <option className='bg-dark_black' value='other'>{t('subjects.other')}</option>
              </select>
              <Icon icon="ph:caret-down-bold" className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
            </div>
          </div>

          {/* Row 4: Message */}
          <div className='flex flex-col gap-2'>
            <label className='text-xs font-bold uppercase tracking-wider text-white/50 px-2' htmlFor='message'>
              {t('labels.message')}
            </label>
            <textarea
              className='w-full rounded-xl border border-white/10 px-5 py-3 outline-hidden transition focus:border-brand-yellow/50 bg-white/5 text-white placeholder:text-white/20 text-sm'
              name='message'
              id='message'
              required
              value={formData.message}
              onChange={handleChange}
              placeholder={t('placeholders.message')}
              rows={4}
            />
          </div>

          {/* Consent & Submit */}
          <div className="flex flex-col gap-6 mt-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="w-5 h-5 rounded border-white/20 bg-white/5 text-brand-yellow focus:ring-brand-yellow focus:ring-offset-0 transition-colors"
              />
              <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                {t('labels.consent')}
              </span>
            </label>

            {!loader ? (
              <button
                type='submit'
                disabled={!formData.consent}
                className={`group w-full text-dark_black font-bold bg-brand-yellow rounded-full flex items-center justify-between py-3 pl-6 pr-2 transition-all duration-300 ease-in-out border border-brand-yellow shadow-xl hover:shadow-brand-yellow/20 ${!formData.consent ? 'opacity-50 cursor-not-allowed' : 'hover:bg-transparent hover:text-brand-yellow'}`}>
                <span className='transform transition-transform duration-300 ease-in-out group-hover:translate-x-2'>
                  {t('submit')}
                </span>
                <div className={`bg-white rounded-full p-2 transition-colors duration-300 ${formData.consent ? 'group-hover:bg-brand-yellow' : ''}`}>
                  <Icon
                    icon="ph:paper-plane-tilt-bold"
                    className={`text-xl text-dark_black transform transition-all duration-500 ${formData.consent ? 'group-hover:-translate-x-[180px] group-hover:rotate-12 group-hover:opacity-0' : ''}`}
                  />
                  <Icon
                    icon="ph:paper-plane-tilt-bold"
                    className="text-xl text-dark_black absolute opacity-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              </button>
            ) : (
              <button disabled className='w-full bg-brand-yellow/50 text-dark_black font-bold py-3.5 rounded-full flex items-center justify-center gap-3 cursor-not-allowed'>
                <div className='animate-spin size-5 border-[2px] border-dark_black border-t-transparent rounded-full' />
                {t('submit')}...
              </button>
            )}
          </div>
        </form>

        {/* Decorative Gradients in Card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple_blue/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green/5 blur-[80px] rounded-full pointer-events-none" />
      </div>
    </div>
  )
}

export default ContactForm
