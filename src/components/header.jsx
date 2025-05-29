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
      info: '(+234) 97-13-35-34 / 63-30-23-05'
    },
    {
      icon: <EmailIcon/>,
      info: 'proximiteservices.az@gmail.com'
    },
  ];

  return (
    <>
      {/* Main Navigation Bar - Always Visible */}
      <nav className={`absolute sm:top-10 top-0 sm:w-[80%] w-[100%] transition-all mx-auto duration-300 z-50 px-10 py-2 shadow-md left-1/2 -translate-x-1/2`}>
        {/* Your existing header content */}
        <div className='w-full md:flex items-center hidden mb-6 p-6'>
          {/* ... your top info bar ... */}
          <div className='flex gap-x-6 w-full text-[14px]'>
           {iconInfo.map((details, index) => (
                   <div className='flex gap-x-1 text-white ' key={index}>
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
        <div className='h-4 w-full md:block hidden'></div>

        <div className='flex items-center justify-between max-w-full mx-auto gap-x-20 bg-white max-h-22'>
          {/* Logo */}
          <div className='w-full flex max-w-40 justify-start items-center text-[#fff]'>
            <Link href={APP_ROUTES.HOME} className={`text-primary font-[700] font-metro-sans uppercase text-2xl h-full overflow-hidden ${isScrolled ? 'text-slate-600' : ''}`}>
              <Image alt='Welcome to BuildingPlans' src={ASSETS.LOGO} className='w-full sm:h-28 h-22 object-cover overflow-hidden' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden justify-around w-full md:flex'>
            {desktopNavigations.map((navigation, index) => (
              <NavigationLink key={index} navigation={navigation} isScrolled={isScrolled} />
            ))}
          </div>

          {/* Mobile Hamburger Button - Always Visible */}
          <div className='md:hidden block'>
            <IconButton onClick={toggleMobileMenu}>
              <MenuIcon className={`text-[19px] base:text-[22px] sm:text-[25px] text-slate-500`} />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[2000] bg-white transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-[-100vh]'} `}>
        <div className='flex justify-between items-center p-10 section-x'>
          <Link href={APP_ROUTES.HOME} onClick={closeMobileMenu}>
            <Image alt='Logo' src={ASSETS.LOGO} className='w-full max-h-20' />
          </Link>
          <IconButton onClick={closeMobileMenu}>
            <CloseIcon className='text-slate-500 text-[25px]' />
          </IconButton>
        </div>

        <div className='h-full flex flex-col justify-center items-center gap-6'>
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
    </>
  );
};

export default Header;

// 'use client';

// import React, { useRef } from 'react';
// import { useWindowLocation } from '@/hooks';
// import { APP_ROUTES, ASSETS } from '@/config';
// import { Button, Image } from '@/components';
// import { IconButton } from '@/components/mui';
// import { HideShowNavbarOnScroll } from '@/hooks/use_scroll';
// import Link from 'next/link';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CallIcon from '@mui/icons-material/Call';
// import EmailIcon from '@mui/icons-material/Email';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';



// const NavigationLink= ({ navigation, onClick, isScrolled }) => {
//   const { windowLocation } = useWindowLocation();
//   const { title, href } = navigation;
//   return (
//     <Link
//       onClick={onClick}
//       href={href}
//       // className={`${isScrolled && windowLocation !== href ? 'text-white md:text-slate-600' : ''} ${
//       //   windowLocation === href ? 'font-[600] text-slate-300' : 'font-[500] text-slate-500'
//       // } flex font-inter hover:text-primary items-center justify-center gap-x-[3px] transition-all duration-300`}
//       className={`
//         flex font-inter hover:text-primary items-center justify-center gap-x-[3px] transition-all duration-300
//         ${windowLocation === href 
//           ? 'font-[600] text-[var(--primary)]' 
//           : isScrolled 
//             ? 'font-[500] text-slate-600' 
//             : 'font-[500] text-slate-500'}
//       `}
      
//     >
//       {title.toUpperCase()}
//     </Link>
//   );
// };

// const Header = () => {
//   const wrapperRef = useRef(null);
//   const sideBarRef = useRef(null);

//   const handleOpenSideBar = () => {
//     wrapperRef.current?.classList.toggle('translate-y-[-100vh]');
//     sideBarRef.current?.classList.toggle('translate-y-[-100vh]');
//     document.body.classList.toggle('overflow-hidden');
//   };
  
//   const { hideNavbar, isScrolled } = HideShowNavbarOnScroll({
//     initialScrollLength: 50,
//     furtherScrollLength: 200,
//   });

//   const desktopNavigations = [
//     { title: 'Home', href: APP_ROUTES.HOME },
//     { title: 'About', href: APP_ROUTES.ABOUT },
    
//     { title: 'Tours', href: APP_ROUTES.TOURS },
//     { title: 'CONTACT', href: APP_ROUTES.CONTACT },
   
//   ];
//   const iconInfo = [
//     {
//       icon: <LocationOnIcon/>,
//       info: 'Sacrecoeur Opposite Green Horse Hotel'
//     },
//     {
//       icon: <CallIcon/>,
//       info: '(+234) 97-13-35-34 / 63-30-23-05'
//     },
//     {
//       icon: <EmailIcon/>,
//       info: 'proximiteservices.az@gmail.com'
//     },
//   ]

//   return (
//     <>
//       <nav
//         // bg-[#020122]
//         // bg-[var(--primary)]
//         //  ${isScrolled ? 'bg-white shadow-md' : 'bg-white'} 
//           //  ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}
//         ref={wrapperRef}
//         className={`absolute sm:top-10 top-0  w-[80%] transition-all mx-auto duration-300 z-50 px-10 py-2 shadow-md left-1/2 -translate-x-1/2 
//           `}
//       >
//         <div className='w-full md:flex items-center hidden mb-6 p-6'>
//           <div className='flex gap-x-6 w-full '>
//           {iconInfo.map((details, index) => (
//                   <div className='flex gap-x-1 justify-center items-center text-[#31c964]' key={index}>
//                     <p>{details.icon}</p>
//                     <p className=''>{details.info}</p>
//                   </div>
//               ))}
//           </div>

//           <div className='flex gap-x-10 text-[#31c964]'>
//             <FacebookIcon/>
//             <YouTubeIcon/>
//             <TwitterIcon/>
//           </div>
//         </div>
       
//        <div className='h-2 w-full md:block hidden'></div>
//         <div className='flex items-center justify-between max-w-full mx-auto  gap-x-20 bg-white'>
//           <div className='w-full flex max-w-40 justify-start items-center text-[#fff]'>
//             <Link href={APP_ROUTES.HOME} className={`text-primary font-[700] font-metro-sans uppercase text-2xl ${isScrolled ? 'text-slate-600' : ''}`}>
//             <Image alt='Welcome to BuildingPlans' src={ASSETS.LOGO} className='w-full sm:max-h-28 max-h-16' />
//             </Link>
//           </div>

//           {/* <div className='hidden max-w-xl justify-between w-[calc(100%_-_400px)] md:flex '>
//             {desktopNavigations.map((navigation, index) => (
//               <NavigationLink key={index} navigation={navigation} isScrolled={isScrolled} />
//             ))}
//           </div> */}

//           <div className='md:w-full md:max-w-full max-w-10 flex justify-around '>
//             {/* <Link className='hidden md:flex font-[700] font-metro-sans' href={APP_ROUTES.CONTACT}>
//               <Button color={`${isScrolled ? 'var(--primary)':'#fff'}`} background={`${isScrolled? '#fff' :'var(--primary)'}`} className={`h-[35px] font-[700] font-metro-sans`}>
//                 CONTACT US
//               </Button>
//             </Link> */}
//             <div className='hidden justify-around w-full md:flex '>
//             {desktopNavigations.map((navigation, index) => (
//               <NavigationLink key={index} navigation={navigation} isScrolled={isScrolled} />
//             ))}
//           </div>
          
//             <div className='md:hidden block '>
//               <IconButton onClick={handleOpenSideBar}>
//                 <MenuIcon className={` text-[19px] base:text-[22px] sm:text-[25px] text-slate-500`} />
//               </IconButton>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Moble navigation */}

//       <nav ref={sideBarRef} className='fixed z-[2000] top-0 right-0 left-0 bottom-0 w-full h-full max-h-full transition-all ease-out duration-300 md:hidden translate-y-[-100vh] bg-white px-10 py-2 text-white section-x section-y'>
//         <div className='flex '>
//           <div className='w-full flex max-w-40 sm:justify-center justify-start items-center'>
//             <Link href={APP_ROUTES.HOME} className='text-primary font-[700] font-metro-sans uppercase text-2xl text-white'>
//             <Image alt='Welcome to BuildingPlans' src={ASSETS.LOGO} className='w-full max-h-20' />
//             {/* Logo */}
//             </Link>
//           </div>
//           <div className='flex justify-end w-full items-center'>
//             <IconButton onClick={handleOpenSideBar}>
//               <CloseIcon className={`text-slate-500 text-[19px] base:text-[22px] sm:text-[25px]`} />
//             </IconButton>
//           </div>
//         </div>

//         <div className='h-full flex flex-col justify-center gap-6 text-white'>
//         {desktopNavigations.map((navigation, index) => (
//               <NavigationLink key={index} navigation={navigation} isScrolled={isScrolled}   />
//             ))}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
