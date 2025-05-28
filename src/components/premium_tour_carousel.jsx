'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiMapPin, FiClock, FiStar } from 'react-icons/fi';
import { Box, Typography, IconButton } from '@mui/material';
import {Image} from '@/components';
import { APP_ROUTES, ASSETS } from "@/config";

// Replace these with your actual image imports
// import maldivesImage from '@/public/images/maldives.jpg';
// import parisImage from '@/public/images/paris.jpg';
// import tokyoImage from '@/public/images/tokyo.jpg';
// import safariImage from '@/public/images/safari.jpg';
// import baliImage from '@/public/images/bali.jpg';
// import romeImage from '@/public/images/rome.jpg';

const tours = [
  {
    id: 1,
    title: "Overwater Paradise in Maldives",
    location: "Maldives",
    price: 3200,
    originalPrice: 3800,
    discount: 15,
    duration: 7,
    rating: 4.9,
    isBestSeller: true,
    type: "beach",
    image: ASSETS.MALDIVES,
    description: "Stay in luxurious overwater bungalows with private pools and direct lagoon access. Includes sunset cruises and spa credits."
  },
  {
    id: 2,
    title: "Romantic Parisian Getaway",
    location: "Paris, France",
    price: 2100,
    originalPrice: 2500,
    discount: 16,
    duration: 5,
    rating: 4.7,
    isBestSeller: false,
    type: "city",
    image: ASSETS.FRANCE,
    description: "Explore the City of Love with guided tours, Seine River dinner cruise, and skip-the-line Louvre access."
  },
  {
    id: 3,
    title: "Tokyo Urban Adventure",
    location: "Tokyo, Japan",
    price: 2800,
    originalPrice: 3200,
    discount: 12,
    duration: 8,
    rating: 4.8,
    isBestSeller: true,
    type: "city",
    image: ASSETS.TOKYO,
    description: "Experience cutting-edge culture with sushi-making classes, robot restaurant visits, and Mt. Fuji day trips."
  },
  {
    id: 4,
    title: "African Safari Expedition",
    location: "Serengeti, Tanzania",
    price: 4500,
    originalPrice: 5200,
    discount: 13,
    duration: 10,
    rating: 5.0,
    isBestSeller: true,
    type: "adventure",
    image: ASSETS.TANZANIA,
    description: "Luxury tented safari with expert guides, hot air balloon rides, and guaranteed Big Five sightings."
  },
  {
    id: 5,
    title: "Bali Spiritual Retreat",
    location: "Ubud, Bali",
    price: 2400,
    originalPrice: 2900,
    discount: 17,
    duration: 7,
    rating: 4.6,
    isBestSeller: false,
    type: "wellness",
    image: ASSETS.BALI,
    description: "Yoga sessions, traditional healing treatments, and cultural workshops in Bali's spiritual heartland."
  },
  {
    id: 6,
    title: "Historic Rome Discovery",
    location: "Rome, Italy",
    price: 1900,
    originalPrice: 2300,
    discount: 18,
    duration: 6,
    rating: 4.5,
    isBestSeller: true,
    type: "cultural",
    image: ASSETS.ROME,
    description: "Walk through ancient history with VIP Colosseum access, Vatican tours, and authentic cooking classes."
  }
];

const PremiumTourCarousel = () => {
  const carouselRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      window.addEventListener('resize', checkScrollPosition);
    }
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScrollPosition, 500);
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'relative',
        '&:hover': {
          '& .nav-button': { opacity: 1 }
        }
      }}
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      {/* Navigation Arrows */}
      {canScrollLeft && (
        <IconButton
          onClick={() => scroll('left')}
          sx={{
            position: 'absolute',
            left: { xs: -4, md: -12 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 30,
            bgcolor: 'rgba(255,255,255,0.9)',
            color: 'text.primary',
            p: 1.5,
            borderRadius: '50%',
            boxShadow: 3,
            opacity: { xs: showNav ? 1 : 0, md: 0 },
            transition: 'opacity 0.3s',
            '&:hover': {
              bgcolor: 'background.paper'
            }
          }}
          className="nav-button"
        >
          <FiArrowLeft style={{ width: 20, height: 20 }} />
        </IconButton>
      )}
      
      {canScrollRight && (
        <IconButton
          onClick={() => scroll('right')}
          sx={{
            position: 'absolute',
            right: { xs: -4, md: -12 },
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 30,
            bgcolor: 'rgba(255,255,255,0.9)',
            color: 'text.primary',
            p: 1.5,
            borderRadius: '50%',
            boxShadow: 3,
            opacity: { xs: showNav ? 1 : 0, md: 0 },
            transition: 'opacity 0.3s',
            '&:hover': {
              bgcolor: 'background.paper'
            }
          }}
          className="nav-button"
        >
          <FiArrowRight style={{ width: 20, height: 20 }} />
        </IconButton>
      )}

      {/* Carousel Container */}
      <Box
        ref={carouselRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          py: 3,
          scrollBehavior: 'smooth',
          
          gap: 3,
          px: 1,
          '&::-webkit-scrollbar': { display: 'none' },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          cursor: 'grab',
          '&:active': {
            cursor: 'grabbing'
          }
        }}
      >
        {tours.map((tour) => (
          <Box
            key={tour.id}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{
              flexShrink: 0,
              width: 300,
              height: 420,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 3,
              position: 'relative'
            }}
          >
            {/* Image Background */}
            <Box sx={{ 
              position: 'absolute',
              inset: 0,
              '& img': {
                width: '100%',
                height: '420px',
                objectFit: 'cover'
              }
            }}>
              {/* <Image 
                src={tour.image} 
                alt={tour.title}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority={tour.id === 1} // Only prioritize first image
              /> */}
              <div className="w-full">
                                  <Image alt={tour.title} src={tour.image} className='object-cover '
                                   sizes="(max-width: 768px) 100vw, 33vw" // Optimized for responsiveness
                                   quality={90}
                priority={tour.id === 1} // Only prioritize first image
                                   />
                                </div>
            </Box>
            
            {/* Gradient Overlay */}
            <Box sx={{ 
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
              zIndex: 10
            }} />
            
            {/* Top Badges */}
            <Box sx={{ 
              position: 'absolute',
              top: 16,
              left: 16,
              zIndex: 20,
              display: 'flex',
              gap: 1
            }}>
              {tour.isBestSeller && (
                <Box sx={{
                  bgcolor: 'warning.main',
                  color: 'common.white',
                  fontSize: 12,
                  fontWeight: 'bold',
                  px: 2,
                  py: 1,
                  borderRadius: '999px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <FiStar style={{ marginRight: 4 }} />
                  Best Seller
                </Box>
              )}
              {tour.discount && (
                <Box sx={{
                  bgcolor: 'error.main',
                  color: 'common.white',
                  fontSize: 12,
                  fontWeight: 'bold',
                  px: 2,
                  py: 1,
                  borderRadius: '999px'
                }}>
                  Save {tour.discount}%
                </Box>
              )}
            </Box>
            
            {/* Content */}
            <Box sx={{ 
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 20,
              p: 3,
              color: 'common.white'
            }}>
              <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                mb: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FiMapPin style={{ marginRight: 4 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                    {tour.location}
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  bgcolor: 'rgba(0,0,0,0.3)',
                  px: 1,
                  py: 0.5,
                  borderRadius: '999px'
                }}>
                  <FiStar style={{ color: '#fbbf24', marginRight: 4 }} />
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {tour.rating}
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold', 
                mb: 1,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {tour.title}
              </Typography>

              <Typography variant="body2" sx={{ 
                mb: 2,
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.9)',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {tour.description}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                fontSize: 14,
                mb: 2
              }}>
                <FiClock style={{ marginRight: 4 }} />
                <Typography variant="body2">
                  {tour.duration} days
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}>
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
                      ${tour.price.toLocaleString()}
                    </Typography>
                    {tour.originalPrice && (
                      <Typography variant="body2" sx={{ 
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'line-through'
                      }}>
                        ${tour.originalPrice.toLocaleString()}
                      </Typography>
                    )}
                  </Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    per person
                  </Typography>
                </Box>
                
                <Box
                  component="button"
                  sx={{
                    bgcolor: 'common.white',
                    color: 'text.primary',
                    fontWeight: 'medium',
                    py: 1.5,
                    px: 2,
                    borderRadius: 2,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      bgcolor: 'grey.100'
                    }
                  }}
                >
                  Explore
                </Box>
              </Box>
            </Box>
            
            {/* Hover Effect Layer */}
            <Box sx={{ 
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0,0,0,0)',
              transition: 'all 0.3s',
              zIndex: 15,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.1)'
              }
            }} />
          </Box>
        ))}
      </Box>
      
      {/* Scroll Indicator (Mobile) */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        display: { md: 'none' }
      }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {tours.map((_, index) => (
            <Box 
              key={index} 
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%',
                bgcolor: 'grey.300'
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PremiumTourCarousel;





// // components/PremiumTourCarousel.jsx
// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiArrowRight, FiArrowLeft, FiMapPin, FiClock, FiStar } from 'react-icons/fi';
// import { Box, Typography, IconButton } from '@mui/material';

// const TourIllustrations = {
//   beach: (
//     <svg viewBox="0 0 400 250" className="w-full h-full">
//       <path d="M0,150 Q200,100 400,150 L400,250 L0,250 Z" fill="#38BDF8" />
//       <path d="M0,150 Q100,130 200,150 Q300,170 400,150 L400,250 L0,250 Z" fill="#0EA5E9" />
//       <circle cx="100" cy="80" r="40" fill="#FBBF24" />
//       <path d="M50,180 Q150,120 250,180 Q350,240 400,200" stroke="#F59E0B" strokeWidth="3" fill="none" />
//       <path d="M250,150 Q270,100 290,150 Q310,200 330,150" stroke="#10B981" strokeWidth="3" fill="none" />
//     </svg>
//   ),
//   mountain: (
//     <svg viewBox="0 0 400 250" className="w-full h-full">
//       <path d="M0,200 L100,50 L200,150 L300,30 L400,200 L400,250 L0,250 Z" fill="#64748B" />
//       <path d="M50,180 L150,80 L250,130 L350,40" stroke="#E2E8F0" strokeWidth="3" fill="none" />
//       <circle cx="300" cy="50" r="20" fill="#F59E0B" />
//     </svg>
//   ),
//   city: (
//     <svg viewBox="0 0 400 250" className="w-full h-full">
//       <rect x="0" y="150" width="400" height="100" fill="#334155" />
//       <rect x="50" y="80" width="30" height="70" fill="#94A3B8" />
//       <rect x="100" y="50" width="40" height="100" fill="#64748B" />
//       <rect x="160" y="30" width="50" height="120" fill="#475569" />
//       <rect x="230" y="70" width="35" height="80" fill="#64748B" />
//       <rect x="290" y="40" width="45" height="110" fill="#475569" />
//       <circle cx="350" cy="30" r="15" fill="#F59E0B" />
//     </svg>
//   )
// };

// const PremiumTourCarousel = ({ tours }) => {
//   const carouselRef = useRef(null);
//   const [showNav, setShowNav] = useState(false);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   // Check scroll position to enable/disable arrows
//   const checkScrollPosition = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//     }
//   };

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener('scroll', checkScrollPosition);
//       // Initial check
//       checkScrollPosition();
      
//       // Also check when window resizes
//       window.addEventListener('resize', checkScrollPosition);
//     }
//     return () => {
//       if (carousel) {
//         carousel.removeEventListener('scroll', checkScrollPosition);
//         window.removeEventListener('resize', checkScrollPosition);
//       }
//     };
//   }, []);

//   const scroll = (direction) => {
//     if (carouselRef.current) {
//       const scrollAmount = direction === 'left' ? -300 : 300;
//       carouselRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth'
//       });
      
//       // Update scroll position after animation
//       setTimeout(checkScrollPosition, 500);
//     }
//   };

//   return (
//     <Box 
//       sx={{ 
//         position: 'relative',
//         '&:hover': {
//           '& .nav-button': { opacity: 1 }
//         }
//       }}
//       onMouseEnter={() => setShowNav(true)}
//       onMouseLeave={() => setShowNav(false)}
//     >
//       {/* Navigation Arrows - KEY FIX: Increased z-index to 30 to ensure they're above card content */}
//       {canScrollLeft && (
//         <IconButton
//           onClick={() => scroll('left')}
//           sx={{
//             position: 'absolute',
//             left: { xs: -4, md: -12 },
//             top: '50%',
//             transform: 'translateY(-50%)',
//             zIndex: 30, // Increased from 10 to 30
//             bgcolor: 'rgba(255,255,255,0.9)',
//             color: 'text.primary',
//             p: 1.5,
//             borderRadius: '50%',
//             boxShadow: 3,
//             opacity: { xs: showNav ? 1 : 0, md: 0 },
//             transition: 'opacity 0.3s',
//             '&:hover': {
//               bgcolor: 'background.paper'
//             },
//             '&.Mui-disabled': {
//               opacity: 0,
//               pointerEvents: 'none'
//             }
//           }}
//           className="nav-button"
//           disabled={!canScrollLeft}
//         >
//           <FiArrowLeft style={{ width: 20, height: 20 }} />
//         </IconButton>
//       )}
      
//       {canScrollRight && (
//         <IconButton
//           onClick={() => scroll('right')}
//           sx={{
//             position: 'absolute',
//             right: { xs: -4, md: -12 },
//             top: '50%',
//             transform: 'translateY(-50%)',
//             zIndex: 30, // Increased from 10 to 30
//             bgcolor: 'rgba(255,255,255,0.9)',
//             color: 'text.primary',
//             p: 1.5,
//             borderRadius: '50%',
//             boxShadow: 3,
//             opacity: { xs: showNav ? 1 : 0, md: 0 },
//             transition: 'opacity 0.3s',
//             '&:hover': {
//               bgcolor: 'background.paper'
//             },
//             '&.Mui-disabled': {
//               opacity: 0,
//               pointerEvents: 'none'
//             }
//           }}
//           className="nav-button"
//           disabled={!canScrollRight}
//         >
//           <FiArrowRight style={{ width: 20, height: 20 }} />
//         </IconButton>
//       )}

//       {/* Carousel Container */}
//       <Box
//         ref={carouselRef}
//         sx={{
//           display: 'flex',
//           overflowX: 'auto',
//           pb: 3,
//           scrollBehavior: 'smooth',
//           gap: 3,
//           px: 1,
//           '&::-webkit-scrollbar': { display: 'none' },
//           msOverflowStyle: 'none',
//           scrollbarWidth: 'none',
//           cursor: 'grab',
//           '&:active': {
//             cursor: 'grabbing'
//           }
//         }}
//       >
//         {tours.map((tour) => (
//           <Box
//             key={tour.id}
//             component={motion.div}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             sx={{
//               flexShrink: 0,
//               width: 300,
//               height: 420,
//               borderRadius: 3,
//               overflow: 'hidden',
//               boxShadow: 3,
//               position: 'relative',
//               bgcolor: 'primary.main',
//               backgroundImage: 'linear-gradient(to bottom right, #3b82f6, #6366f1)'
//             }}
//           >
//             {/* Dynamic SVG Background */}
//             <Box sx={{ 
//               position: 'absolute',
//               inset: 0,
//               opacity: 0.7,
//               '& svg': {
//                 width: '100%',
//                 height: '100%'
//               }
//             }}>
//               {TourIllustrations[tour.type] || TourIllustrations.beach}
//             </Box>
            
//             {/* Gradient Overlay */}
//             <Box sx={{ 
//               position: 'absolute',
//               inset: 0,
//               backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
//               zIndex: 10 // Keep this lower than navigation buttons
//             }} />
            
//             {/* Top Badges */}
//             <Box sx={{ 
//               position: 'absolute',
//               top: 16,
//               left: 16,
//               zIndex: 20, // Lower than navigation buttons
//               display: 'flex',
//               gap: 1
//             }}>
//               {tour.isBestSeller && (
//                 <Box sx={{
//                   bgcolor: 'warning.main',
//                   color: 'common.white',
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                   px: 2,
//                   py: 1,
//                   borderRadius: '999px',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}>
//                   <FiStar style={{ marginRight: 4 }} />
//                   Best Seller
//                 </Box>
//               )}
//               {tour.discount && (
//                 <Box sx={{
//                   bgcolor: 'error.main',
//                   color: 'common.white',
//                   fontSize: 12,
//                   fontWeight: 'bold',
//                   px: 2,
//                   py: 1,
//                   borderRadius: '999px'
//                 }}>
//                   Save {tour.discount}%
//                 </Box>
//               )}
//             </Box>
            
//             {/* Content */}
//             <Box sx={{ 
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               right: 0,
//               zIndex: 20, // Lower than navigation buttons
//               p: 3,
//               color: 'common.white'
//             }}>
//               <Box sx={{ 
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 mb: 1
//               }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <FiMapPin style={{ marginRight: 4 }} />
//                   <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
//                     {tour.location}
//                   </Typography>
//                 </Box>
//                 {tour.rating && (
//                   <Box sx={{ 
//                     display: 'flex', 
//                     alignItems: 'center', 
//                     bgcolor: 'rgba(0,0,0,0.3)',
//                     px: 1,
//                     py: 0.5,
//                     borderRadius: '999px'
//                   }}>
//                     <FiStar style={{ color: '#fbbf24', marginRight: 4 }} />
//                     <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//                       {tour.rating}
//                     </Typography>
//                   </Box>
//                 )}
//               </Box>
              
//               <Typography variant="h6" sx={{ 
//                 fontWeight: 'bold', 
//                 mb: 1,
//                 display: '-webkit-box',
//                 WebkitLineClamp: 2,
//                 WebkitBoxOrient: 'vertical',
//                 overflow: 'hidden'
//               }}>
//                 {tour.title}
//               </Typography>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 alignItems: 'center',
//                 fontSize: 14,
//                 mb: 2
//               }}>
//                 <FiClock style={{ marginRight: 4 }} />
//                 <Typography variant="body2">
//                   {tour.duration} days
//                 </Typography>
//               </Box>
              
//               <Box sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-end'
//               }}>
//                 <Box>
//                   <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
//                     <Typography variant="h5" sx={{ fontWeight: 'bold', mr: 1 }}>
//                       ${tour.price}
//                     </Typography>
//                     {tour.originalPrice && (
//                       <Typography variant="body2" sx={{ 
//                         color: 'rgba(255,255,255,0.7)',
//                         textDecoration: 'line-through'
//                       }}>
//                         ${tour.originalPrice}
//                       </Typography>
//                     )}
//                   </Box>
//                   <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
//                     per person
//                   </Typography>
//                 </Box>
                
//                 <Box
//                   component="button"
//                   sx={{
//                     bgcolor: 'common.white',
//                     color: 'text.primary',
//                     fontWeight: 'medium',
//                     py: 1.5,
//                     px: 2,
//                     borderRadius: 2,
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'all 0.2s',
//                     '&:hover': {
//                       transform: 'scale(1.05)',
//                       bgcolor: 'grey.100'
//                     }
//                   }}
//                 >
//                   Explore
//                 </Box>
//               </Box>
//             </Box>
            
//             {/* Hover Effect Layer - KEY FIX: Reduced z-index to ensure it doesn't block navigation */}
//             <Box sx={{ 
//               position: 'absolute',
//               inset: 0,
//               bgcolor: 'rgba(0,0,0,0)',
//               transition: 'all 0.3s',
//               zIndex: 15, // Between content (20) and navigation (30)
//               '&:hover': {
//                 bgcolor: 'rgba(0,0,0,0.1)'
//               }
//             }} />
//           </Box>
//         ))}
//       </Box>
      

//       {/* Scroll Indicator (Mobile) */}
//       <div className='flex justify-center'>
//             <Box sx={{ 
//                 display: 'flex',
//                 justifyContent: 'center',
//                 mt: 2,
//                 display: { md: 'none' }
//             }}>
//                 <Box sx={{ display: 'flex', gap: 1 }}>
//                 {tours.map((_, index) => (
//                     <Box 
//                     key={index} 
//                     sx={{ 
//                         width: 8, 
//                         height: 8, 
//                         borderRadius: '50%',
//                         bgcolor: 'grey.300'
//                     }}
//                     />
//                 ))}
//                 </Box>
//             </Box>
//       </div>
      
//     </Box>
//   );
// };

// export default PremiumTourCarousel;
