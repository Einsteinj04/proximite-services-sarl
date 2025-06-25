'use client';

import React, { useRef, useState } from 'react';
import { useWindowLocation } from '@/hooks';
import { APP_ROUTES, ASSETS } from '@/config';
import { Button, Image } from '@/components';
import { IconButton } from '@/components/mui';
import { HideShowNavbarOnScroll } from '@/hooks/use_scroll';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const NavigationLink = ({ navigation, onClick, isScrolled }) => {
  const { windowLocation } = useWindowLocation();
  const { title, href } = navigation;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex font-inter hover:text-[var(--primary)] items-center justify-center gap-x-[3px] transition-all duration-300
        ${windowLocation === href 
          ? 'font-[600] text-[var(--primary)]' 
          : isScrolled 
            ? 'font-[500] text-slate-600' 
            : 'font-[500] text-slate-500'}
      `}
    >
      {title.toUpperCase()}
    </Link>
  );
};




const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { hideNavbar, isScrolled } = HideShowNavbarOnScroll({
    initialScrollLength: 50,
    furtherScrollLength: 200,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('overflow-hidden');
  };

  const desktopNavigations = [
    { title: 'Home', href: APP_ROUTES.HOME },
    { title: 'About', href: APP_ROUTES.ABOUT },
    { title: 'Tours', href: APP_ROUTES.TOURS },
    { title: 'CONTACT', href: APP_ROUTES.CONTACT },
  ];

  const iconInfo = [
    {
      icon: <LocationOnIcon/>,
      info: 'Sacrecoeur Opposite Green Horse Hotel'
    },
    {
      icon: <CallIcon/>,
      info: '(+229) 97-13-35-34 / 63-30-23-05'
    },
    {
      icon: <EmailIcon/>,
      info: 'proximiteservices.az@gmail.com'
    },
  ];

  return (
    <section className='w-full mx-auto'>
      {/* Main Navigation Bar - Always Visible */}
      {!isMobileMenuOpen && (
        <nav className={`fixed top-0 sm:w-[100%] w-[100%] transition-all mx-auto duration-300 z-[50] shadow-md left-1/2 max-w-[2000px] -translate-x-1/2  ${isScrolled ? 'shadow-md' : ''} 
          ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Your existing header content */}
        <div className='w-full md:flex items-center hidden p-4 bg-[#1d293d]'>
          {/* ... your top info bar ... */}
          <div className='flex gap-x-6 w-full text-[14px] '>
           {iconInfo.map((details, index) => (
                   <div className='flex gap-x-1 text-slate-400 ' key={index}>
                     <p className=' h-full flex items-center'>{details.icon}</p>
                     <p className=' h-full flex items-center'>{details.info}</p>
                   </div>
               ))}
           </div>

           <div className='flex md:gap-x-10 gap-x-2 text-[#31c964]'>
             <FacebookIcon/>
             <YouTubeIcon/>
             <TwitterIcon/>
           </div>
        </div>
        {/* <div className='h-4 w-full md:block hidden'></div> */}

        <div className='flex items-center justify-between max-w-full mx-auto gap-x-20 bg-white max-h-22 overflow-hidden section-x'>
          {/* Logo */}
          <div className='w-full flex max-w-40 sm:justify-center justify-start items-center text-[#fff]'>
            <Link href={APP_ROUTES.HOME} className={`text-primary font-[700] font-metro-sans uppercase text-2xl h-full ${isScrolled ? 'text-slate-600' : ''}`}>
              <Image alt='Welcome to BuildingPlans' src={ASSETS.LOGO} className='w-full sm:h-32 h-22 object-cover ' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden justify-around w-full md:flex '>
            {desktopNavigations.map((navigation, index) => (
              <NavigationLink key={index} navigation={navigation} isScrolled={isScrolled} />
            ))}
          </div>

          {/* Mobile Hamburger Button - Always Visible */}
          <div className='md:hidden block'>
            <IconButton onClick={toggleMobileMenu}className=' z-[60]'>
              <MenuIcon className={`text-[19px] base:text-[22px] sm:text-[25px] text-slate-500`} />
            </IconButton>
          </div>
        </div>
      </nav>
      )}
      

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0  bg-white transition-all duration-300 transform  ${isMobileMenuOpen ? 'translate-y-0 z-[49]' : 'translate-y-[-100vh] pointer-events-none z-[-1]'} `}>
        <div className='flex justify-between items-center p-10 section-x'>
          <Link href={APP_ROUTES.HOME} onClick={closeMobileMenu}>
            <Image alt='Logo' src={ASSETS.LOGO} className='w-full max-h-20' />
          </Link>
          <IconButton onClick={closeMobileMenu}>
            <CloseIcon className='text-slate-500 text-[25px]' />
          </IconButton>
        </div>

        <div className='h-full flex flex-col justify-start items-center gap-6'>
          {desktopNavigations.map((navigation, index) => (
            <NavigationLink 
              key={index} 
              navigation={navigation} 
              isScrolled={isScrolled}
              onClick={closeMobileMenu}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;

