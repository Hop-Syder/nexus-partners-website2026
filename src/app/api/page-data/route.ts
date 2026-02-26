import { NextResponse } from 'next/server'
import {
  avatarList,
  brandList,
  innovationList,
  NosProjetsList,
  creativeMindList,
} from '@/data/page-data'

// Note: keep these here if they are only used in this API or move them too
const WebResultTagList = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'strategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'technology',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'performance',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'starter',
    plan_price: '250.000 FCFA',
    icon_img: '/images/home/startupPlan/white_tick.svg',
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'pro',
    plan_price: '500.000 FCFA',
    icon_img: '/images/home/startupPlan/black_tick.svg',
  },
]

const faqList = [
  {
    faq_key: 'services',
  },
  {
    faq_key: 'duration',
  },
  {
    faq_key: 'pricing',
  },
  {
    faq_key: 'support',
  },
]

const achievementsList = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    achievement_key: 'framer',
    year: '2024',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    achievement_key: 'dribbble',
    year: '2023',
    url: 'https://dribbble.com/wrappixel',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    achievement_key: 'awwwards',
    year: '2022',
    url: 'https://www.framer.com/@wrap-pixel/',
  },
]


export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    NosProjetsList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  });
};
