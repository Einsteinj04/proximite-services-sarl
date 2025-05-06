'use client'
import Link from 'next/link';
import { APP_ROUTES, ASSETS } from '@/config';
import {Image } from '@/components';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
   const desktopNavigations = [
      { title: 'Home', href: APP_ROUTES.HOME },
      { title: 'About', href: APP_ROUTES.ABOUT },
      
      { title: 'Tours', href: APP_ROUTES.TOURS },
      { title: 'Contact', href: APP_ROUTES.CONTACT },
     
    ];
  return (
	<div className="text-white bg-[var(--secondary)] flex flex-col items-center justify-center sm:gap-y-8 gap-y-4 section-y section-x">
  {/* <div className="border-red-500 border-2 h-full">Footer */}
      <div className=''>
      <Link href={APP_ROUTES.HOME} className={`text-primary font-[700] font-metro-sans uppercase text-2xl`}>
                    <Image alt='Welcome to BuildingPlans' src={ASSETS.LOGO} className='max-w-[150px] max-h-48 ' />
        </Link>
      </div>
      <p className='sm:text-2xl text-xl max-w-3xl text-center text-slate-300'>Nullam ultrices tortor non diam ullamcorper auctor. In urna tellus, auctor sit amet est ut, scelerisque volutpat diam.</p>
      <div className='flex gap-x-10 text-5xl '>
        <FacebookRoundedIcon sx={{ fontSize: {xs:40,md:40} }}/>
        <WhatsAppIcon sx={{ fontSize: {xs:40,md:40} }}/>
        <InstagramIcon sx={{ fontSize: {xs:40,md:40} }}/>
        <YouTubeIcon sx={{ fontSize: {xs:40,md:40} }}/>
      </div>

      <div className='flex  w-[80%] justify-around sm:text-xl uppercase text-[14px] text-[#31c964] '>
      {desktopNavigations.map((navigation, index) => (
              <div key={index} className=''> {navigation.title}</div>
            ))}
      </div>
      <div>Copyright ©2025 All rights reserved</div>
  </div>
  )
}

export default Footer