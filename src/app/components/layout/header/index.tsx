'use client'
import { Link } from '@/i18n/routing'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import HeaderLink from './Navigation/HeaderLink'
import Logo from './Logo'
import MobileHeader from './Navigation/MobileHeader'
import ThemeToggler from './ThemeToggle'
import LanguageSwitcher from '../language-switcher'
import { useTranslations } from 'next-intl';

function Header() {
  const t = useTranslations('Layout.header');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuData, setMenuData] = useState<any[]>([]);
  const [sticky, setSticky] = useState(false)
  const pathname = usePathname()
  const hasMounted = useRef(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Run only once on initial mount
    if (!hasMounted.current) {
      hasMounted.current = true;

      const fetchData = async () => {
        try {
          const res = await fetch('/api/layout-data');
          if (!res.ok) throw new Error('Failed to fetch');
          const data = await res.json();
          setMenuData(data?.headerData);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      };

      fetchData();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 z-50 w-full`}>
        <div className='container px-1 md:p-3'>
          <nav
            className={`flex items-center py-3 px-2 md:px-4 justify-between max-lg:justify-around ${sticky
              ? ' rounded-2xl shadow-sm bg-white dark:bg-dark_black'
              : null
              } `}>
            <div className='flex items-center shrink-0'>
              <Logo />
            </div>
            <div className='hidden lg:flex bg-dark_black/5 dark:bg-white/5 rounded-2xl p-3'>
              <ul className='flex gap-0 2xl:gap-1.5'>
                {menuData?.map((item, index) => (
                  <HeaderLink key={index} item={item} />
                ))}
              </ul>
            </div>
            <div className='flex items-center gap-1 md:gap-4 shrink-0'>
              {/* ---------------------Language Switcher----------------------- */}
              <LanguageSwitcher />

              {/* ---------------------Light/Dark Mode button-------------------- */}
              <ThemeToggler />

              {/* ---------------------CTA Button-------------------- */}
              <Link
                href="https://forms.office.com/r/3FWqQ2n2YT"
                className="hidden md:flex items-center justify-center px-4 py-2 bg-brand-yellow text-dark_black rounded-full text-xs md:text-sm font-medium hover:bg-opacity-90 transition-all duration-200 shrink-0"
              >
                {t('cta')}
              </Link>

              <div className='hidden max-lg:flex'>
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className='p-1 transition-colors hover:text-purple_blue'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path
                      fill='none'
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeMiterlimit='10'
                      strokeWidth='1.5'
                      d='M4.5 12h15m-15 5.77h15M4.5 6.23h15'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* ------------------------- Mobile sidebar starts ------------------------- */}
        {sidebarOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white dark:bg-dark_black shadow-lg transform transition-transform duration-300 max-w-xs ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <p className='text-lg font-bold'>Menu</p>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label='Close mobile menu'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='p-4'>
            <ul className='flex flex-col'>
              {menuData && menuData?.map((item, index) => (
                <MobileHeader key={index} item={item} />
              ))}
            </ul>
            <div className='mt-8'>
              <Link
                href="https://forms.office.com/r/3FWqQ2n2YT"
                onClick={() => setSidebarOpen(false)}
                className="flex items-center justify-center w-full py-4 bg-brand-yellow text-dark_black rounded-xl font-medium shadow-lg hover:bg-opacity-90 transition-all"
              >
                {t('cta')}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
