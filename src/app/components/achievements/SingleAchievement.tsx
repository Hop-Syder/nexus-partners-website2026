import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

const SingleAchievement = ({
  achievements,
}: {
  achievements: any
}) => {
  const t = useTranslations('Achievements.items');
  const { url, icon, dark_icon, achievement_key, year } = achievements

  return (
    <Link href={url} target='_blank'>
      <div className='group flex flex-col gap-11 xl:gap-16 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl dark:bg-white/5'>
        <div>
          <Image
            src={icon}
            alt='icon'
            height={32}
            width={32}
            className='dark:hidden'
          />
          <Image
            src={dark_icon}
            alt='icon'
            height={32}
            width={32}
            className='dark:block hidden'
          />
        </div>
        <div className='flex flex-col gap-3'>
          <p>{t(`${achievement_key}.sub_title`)}</p>
          <h3 className='group-hover:text-purple_blue text-2xl'>{t(`${achievement_key}.title`)}</h3>
        </div>
        <p>{year}</p>
      </div>
    </Link>
  )
}

export default SingleAchievement
