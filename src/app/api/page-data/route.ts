import { NextResponse } from 'next/server'

const avatarList = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Olivia Miller',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'brand_strategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'digital_marketing',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'uiux_design',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'analytics_reporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'web_development',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
  {
    image: '/images/home/innovation/seo.svg',
    title: 'seo_local',
    bg_color: 'bg-pale-yellow/20',
    txt_color: 'text-pale-yellow',
  },
  {
    image: '/images/reseau/whatsapp.svg',
    title: 'whatsapp_automation',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
]

const NosProjetsList = [
  {
    image: '/images/service/art-de-vivre.png',
    title: 'projet-1',
    tag: ['tag-projet-1'],
    link: 'https://www.cabinetartdevivre.com',
  },
  {
    image: '/images/service/empreintefinale.png',
    title: 'projet-2',
    tag: ['tag-projet-2'],
    link: 'https://empreintefinale.com/',
  },
  
]

const creativeMindList = [
  {
    image: '/images/team/ismael_daouda_abassi.png', // photo professionnelle du fondateur
    name: 'Ismaël Christian \nDAOUDA ABASSI',
    position: 'CEOS Nexus Partners',
    twitterLink: 'https://twitter.com/IsmaelNexus', // lien réel ou placeholder
    linkedinLink: 'https://www.linkedin.com/in/'
  },
]

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
