'use client'
import React, {useRef} from 'react'
import { APP_ROUTES, ASSETS } from "@/config";
import { Image, Button, BulletPoints, Card, BenefitCards, PremiumTourCarousel } from "@/components";
import Link from 'next/link';
import { ArrowForwardIos, FlightTakeoff, DirectionsCar, House, PriceChange, EnhancedEncryption, Public, People} from "@mui/icons-material";
import { FiArrowRight, FiArrowLeft, FiMapPin, FiClock, FiStar } from 'react-icons/fi';
import Masonry from '@mui/lab/Masonry';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const luxuryTours = [
  {
    id: 1,
    title: "Luxury Maldives Overwater Bungalow",
    location: "Maldives",
    price: 3200,
    originalPrice: 3800,
    discount: 15,
    duration: 7,
    rating: 4.9,
    isBestSeller: true,
    type: "beach"
  },
  {
    id: 2,
    title: "Alpine Retreat in Swiss Alps",
    location: "Switzerland",
    price: 2800,
    originalPrice: 3200,
    discount: 12,
    duration: 5,
    rating: 4.8,
    isBestSeller: false,
    type: "mountain"
  },
  {
    id: 3,
    title: "Romantic Paris City Escape",
    location: "Paris, France",
    price: 2100,
    originalPrice: 2500,
    discount: 16,
      duration: 4,
      rating: 4.7,
      isBestSeller: true,
      type: "city"
    },
{
      id: 4,
      title: "Romantic Paris City Escape",
      location: "Paris, France",
      price: 2100,
      originalPrice: 2500,
      discount: 16,
        duration: 4,
        rating: 4.7,
        isBestSeller: true,
        type: "city"
      },
      {
        id: 5,
        title: "Romantic Paris City Escape",
        location: "Paris, France",
        price: 2100,
        originalPrice: 2500,
        discount: 16,
          duration: 4,
          rating: 4.7,
          isBestSeller: true,
          type: "city"
        },
  ]
// const optionsCard = [
//   {
//     id: 1,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
//   {
//     id: 2,
//     image: ASSETS.CHINA,
//     title: 'Mountain Retreat',
//     desc: 'Cozy cabins with stunning alpine views'
//   },{
//     id: 3,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
//   {
//     id: 4,
//     image: ASSETS.CHINA,
//     title: 'Mountain Retreat',
//     desc: 'Cozy cabins with stunning alpine views'
//   },
//   {
//     id: 5,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
//   {
//     id: 6,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
//    {
//     id: 7,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
//    {
//     id: 8,
//     image: ASSETS.GREECE,
//     title: 'Beach Getaway',
//     desc: 'Luxury beachfront villas with private pools'
//   },
  
//   // Add 4+ more items for smooth looping
// ];
const imageItems = [
  { id: 1, img: ASSETS.PARIS, title : 'Paris', height: '500px' },  // Wider image
  { id: 2, img: ASSETS.GREECE, title: 'Greece', height: '250px' }, // Taller image
  { id: 3, img: ASSETS.CHINA, title: 'China', height: '500px' },  
  { id: 4, img: ASSETS.LONDON, title: 'London', height: '250px' },   // 3
  // Add more images with varying aspect ratios
];
const benefitItems = [
  {
    icon: <People/>,
    heading:'Personalized Attention',
    text:'We design care plans around your family’s unique routines and preferences, with dedicated support whenever you need it.'
  },
  {
    icon: <EnhancedEncryption/>,
    heading:'Trusted Caregivers',
    text:'Every team member is thoroughly vetted, trained, and committed to treating your loved ones like family.'
  },
  {
    icon: <Public/>,
    heading:'Flexible Options',
    text:'From occasional help to 24/7 care, we adapt to your schedule—even for last-minute requests.'
  },
  {
    icon: <PriceChange/>,
    heading:'Honest Pricing',
    text:'Clear, upfront costs with no hidden fees, so you can focus on what matters most.'
  },

]

const cards = [
  { icon: <FlightTakeoff   sx={{ fontSize: '34px' }}/>,
    service:'Flight Booking',
    amount: '120,000',
    image:ASSETS.FLIGHT
  },
  { icon: <DirectionsCar sx={{ fontSize: '34px' }}/>,
    service:'Car Rental',
    amount: '80,000',
    image:ASSETS.CAR
  },
  { icon: <House sx={{ fontSize: '34px' }}/>,
    service:'Hotel Booking',
    amount: '65,000',
    image:ASSETS.HOTEL
  }
]

const HeroSection = () => {
    return (
    //   <section className=' flex flex-col items-start justify-center relative section-x'>
    //   <div className='absolute h-[96vh] w-full top-0 right-0 bottom-0 left-0 aspect-[16/9]'>
    //    <Image
    //       alt="Welcome to Proximite Services"
    //       src={ASSETS.HOME_HERO}
    //       className=" object-cover h-[96vh] w-full md:object-top object-center"
    //     />
    // </div>
    <section className='relative h-[96vh] w-full '>
        {/* Remove all absolute positioning wrappers */}
          <Image
          alt="Hero Image"
          src={ASSETS.HOME_HERO}
          sizes="100vw"
          className="object-cover h-[96vh] object-center md:object-top absolute "
          unoptimized={true} // ← THIS IS THE KEY LINE
        />
    <div className='absolute top-0 right-0 bottom-0 left-0 h-full min-h-[96vh] z-[3] inset-0 bg-[linear-gradient(#00000080,#00000080)]'></div>
    <section className='z-10  flex flex-col justify-center relative  w-full h-[96vh]  text-white  items-center section-x'>
      <div className=' relative sm:top-[10%]  flex  gap-y-4 flex-col items-center '>
              <div className='sm:text-6xl text-5xl text-center font-medium'>Let's Make Your Best Trip Ever</div>
              <p className='text-slate-300 sm:text-[20px] ; max-w-2xl text-center  mx-auto  text-[18px]'>Plan and book your perfect trip with expert advice. travel tips, destination information and inspiration from us</p>
              <div className='w-full flex justify-center h-[60px] items-center'>
              <Link className='font-metro-sans ' href={APP_ROUTES.CONTACT}>
                            <Button color='#fff' background='var(--primary)' className={`font-[700] font-metro-sans text-xs flex sm:gap-x-4 gap-x-2 max-w-[450px] mx-auto px-`}>
                              <div className='text-xl px-4'>BOOK NOW</div> <ArrowForwardIos/>
                            </Button>
                          </Link>
              {/* </div> */}
              </div>
             
      </div>
    </section>
    </section>
    ) 
}

const OurOffers = () =>{
  return (
    <section className='section-x section-y'>
      <div className='flex md:flex-row flex-col sm:gap-y-10 gap-y-6 section-y'>
        <div className='md:basis-1/3'>
          <BulletPoints feature={'Our Offers'}/>
        </div>
        <div className='md:basis-2/3 flex md:justify-center'> 
        <p className='text-[20px] text-slate-500 max-w-[500px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere pariatur, quae odit iure delectus totam doloremque consectetur dolores minima id Facere pariatur, quae odit iure !</p>
        </div>
      </div>



      <div className="container mx-auto  py-12">
      {/* Mobile: Single column, Desktop: 3 cards with perfect spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {
        cards.map((card,index)=>{
          return(<Card icon= {card.icon} service={card.service} amount = {card.amount} image={card.image} key={index}/>)
        })
        }
      </div>
    </div>
      
    </section>
  )
}

const Benefits = () => {
  return (
    <section className='section-y section-x bg-blue-100 flex flex-col md:flex-row gap-8'>
      {/* Text Content */}
      <div className='flex flex-col gap-y-6 md:w-1/3 basis-3/4'>
        <div>
          <BulletPoints feature={'Our Benefits'}/>
        </div>
        <div className='max-w-[500px]'>
          <p className='text-slate-500 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vel incidunt numquam doloribus quos aperiam magni modi nesciunt cum dicta.</p>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-10">
          {benefitItems.map((items, index)=>{
            return(
              <BenefitCards icon={items.icon} heading={items.heading} text={items.text} key={index}/>
            )
          })}
        </div>

      </div>

      {/* Masonry Grid */}
      <div className='md:w-2/3 basis-2/4'>
        <Box sx={{ width: '100%' }}>
          <Masonry 
            columns={{ xs: 1, sm: 2 }} 
            spacing={2}
            
          >
            {imageItems.map((item) => (
              <Box
              className={` `}
                key={item.id}
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: 'auto',
                  maxHeight: '500px',
                  // border:'2px solid orange',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    zIndex: 1,
                  }
                }}
              >
                {/* Fixed: Proper Image Implementation */}
                <Box
                  sx={{ height: {sm: item.height, xs:'300px'},
                    // border:'2px solid' 
                  }}
                >
                <div className={`w-full flex justify-center h-full`}>
                  <Image
                      src={item.img}
                      alt={item.title}
                      className={`duration-300 object-cover h-full w-full object-center`}
                    />
                </div>

                </Box>

                {/* Title Overlay */}
                
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    p: 2,
                    // border:'2px solid blue'
                  }}
                >
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      color: 'white', 
                      fontWeight: 500,
                      textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box> 
              </Box>
            ))}
          </Masonry>
        </Box>
      </div>
    </section>
  )
}
const Carousel = () => {
  return (
    <section className="py-16 px-4 section-x section-y mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm uppercase tracking-widest text-amber-500 font-medium">Premium Getaways</span>
        {/* <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Discover Your Dream Destination
        </h2> */}
         <div className='section-y w-full flex justify-center'>
          <BulletPoints feature={'Discover Your Dream Destination'} position='center'/>
        </div>
        
      </div>
      <PremiumTourCarousel tours={luxuryTours} />
    </section>
  )
}

// const Carousel = () => {
//   const swiperRef = useRef(null)
//   return (
//     <div className="relative py-12 px-4 md:pl-8 md:pr-32 section-x section-y"> {/* 👈 Right padding increased */}
//     <BulletPoints feature={'Flights'} position={'center'}/>
//     <div className='section-y'></div>
//       <Swiper
//         loop={true}
//         pagination={{
//           clickable: true,
//           el: '.custom-pagination',
//           dynamicBullets: false,
//           bulletClass: 'swiper-pagination-bullet', // Required for custom styling
//           bulletActiveClass: 'swiper-pagination-bullet-active'
//         }}
//         modules={[Navigation, Pagination, Autoplay]} // Ensure Pagination is included
//         slidesPerView={'auto'}
//         loopAdditionalSlides={1}
//         spaceBetween={24}
//         centeredSlides={false} // 👈 Disable centering
//         navigation={{
//           nextEl: '.custom-next',
//           prevEl: '.custom-prev',
//         }}
//         onSwiper={(swiper) => {
//                     swiperRef.current = swiper;
//                   }}
//         breakpoints={{
//           0: {
//             slidesPerView: 1,
//             spaceBetween: 16,
//             centeredSlides: true // 👈 Center on mobile
//           },
//           768: {
//             slidesPerView: 2.5, // 👈 Shows 1 full + 20% of next
//             spaceBetween: 24,
//             centeredSlides: false
//           },
//           1024: {
//             slidesPerView: 2.7, // 👈 Shows 1 full + 80% of next
//           }
//         }}
//         className="" // 👈 Allows partial cards to show
//       >
//         {optionsCard.map((card) => (
//           <SwiperSlide 
//             key={card.id} 
//             // className="!w-[85vw] md:!w-[45vw] lg:!w-[35vw]" // 👈 Responsive widths
//           >
//             {/* Your card content */}
//             <motion.div 
//               whileHover={{ y: -8 }}
//               // className="bg-white rounded-xl shadow-lg overflow-hidden w-full h-[400px] flex flex-col justify-center"
//               className='bg-white shadow-lg h-[400px] flex flex-col overflow-hidden justify-center border-slate-400 border-1 p-4'
//             >
//               <div className="relative h-48 w-full bg-slate-500 max-w-[768px]">
//                 {/* <p className='text-white '>{card.id}</p> */}
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   className="object-cover h-48 w-full"
//                   // sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//               <div className="p-6 flex-1 flex flex-col"><h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
//                 <p className="text-gray-600 mt-2 flex-1">{card.description}</p>
//                 {/* <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg self-start hover:bg-primary-dark transition-colors text-red-400">
//                   Book Now
//                 </button> */}
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Right-only navigation */}
//       {/* <button className="custom-next absolute right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"> */}
//       <button 
//         onClick={() => swiperRef.current?.slidePrev()} // 👈 Now works in JS
//         className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
//       >
//         ←
//       </button>
//       <button 
//         onClick={() => swiperRef.current?.slideNext()}
//         className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors"
//       >
//         →
//       </button>

//       {/* Mobile dots */}
//       <div className='h-8  flex justify-center items-center'></div>
//       <div className="custom-pagination hidden" />
//     </div>
//   )
// }


const Client = () => {
  return (<div className='w-full h-full'>
    <HeroSection/>
    <OurOffers/>
    <Benefits/>
    <Carousel/>
  </div>
  )
}

export default Client;