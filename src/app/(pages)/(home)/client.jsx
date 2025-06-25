'use client'
import React, { useState } from 'react'
import { APP_ROUTES, ASSETS } from "@/config";
import { Image, Button, BulletPoints, Card, BenefitCards, PremiumTourCarousel, Testimonials, Newsletter, DestinationGrid } from "@/components";
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  FlightTakeoff as FlightIcon,
  DirectionsCar as CarIcon,
  House as HotelIcon,
  PriceChange as PriceIcon,
  EnhancedEncryption as SecurityIcon,
  Public as GlobeIcon,
  People as PeopleIcon,
  Star as StarIcon,
  AccessTime as ClockIcon,
  Place as PinIcon
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

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
    type: "beach",
    image: ASSETS.MALDIVES
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
    type: "mountain",
    image: ASSETS.SWISS
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
    type: "city",
    image: ASSETS.PARIS
  },
  {
    id: 4,
    title: "Safari Adventure in Kenya",
    location: "Kenya",
    price: 2500,
    originalPrice: 2900,
    discount: 14,
    duration: 6,
    rating: 4.8,
    isBestSeller: true,
    type: "adventure",
    image: ASSETS.KENYA
  },
  {
    id: 5,
    title: "Cultural Journey Through Japan",
    location: "Japan",
    price: 3500,
    originalPrice: 4000,
    discount: 12,
    duration: 10,
    rating: 4.9,
    isBestSeller: false,
    type: "cultural",
    image: ASSETS.JAPAN
  },
];
const imageItems = [
  { id: 1, img: ASSETS.PARIS, title : 'Paris', height: '500px' },  // Wider image
  { id: 2, img: ASSETS.GREECE, title: 'Greece', height: '250px' }, // Taller image
  { id: 3, img: ASSETS.CHINA, title: 'China', height: '500px' },  
  { id: 4, img: ASSETS.LONDON, title: 'London', height: '250px' },   // 3
  // Add more images with varying aspect ratios
];
const popularDestinations = [
  { id: 1, name: "Bali, Indonesia", image: ASSETS.BALI, price: "$1,200", rating: 4.8 },
  { id: 2, name: "Santorini, Greece", image: ASSETS.GREECE, price: "$1,800", rating: 4.9 },
  { id: 3, name: "Kyoto, Japan", image: ASSETS.TOKYO, price: "$2,100", rating: 4.7 },
  { id: 4, name: "Rome, Italy", image: ASSETS.ROME, price: "$1,500", rating: 4.6 },
  { id: 5, name: "New York, USA", image: ASSETS.USA, price: "$1,900", rating: 4.5 },
  { id: 6, name: "Cape Town, South Africa", image: ASSETS.CAPETOWN, price: "$1,600", rating: 4.8 },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frequent Traveler",
    content: "Proximite Services made our anniversary trip unforgettable. Every detail was perfectly arranged, and their local recommendations were spot on!",
    rating: 5,
    image: ASSETS.AVATAR1
  },
  {
    id: 2,
    name: "The Okafor's",
    role: "Family Vacationers",
    content: "Traveling with three kids can be stressful, but Proximite planned the perfect family-friendly itinerary. The kids still talk about our safari adventure!",
    rating: 4,
    image: ASSETS.AVATAR2
  },
  {
    id: 3,
    name: "Michael Bush",
    role: "Business Traveler",
    content: "As someone who travels monthly for work, I appreciate how Proximite handles all the logistics. Their corporate travel program saves me hours of planning.",
    rating: 5,
    image: ASSETS.AVATAR3
  }
];

const benefitItems = [
  {
    icon: <PeopleIcon className="text-blue-600" />,
    heading: 'Personalized Attention',
    text: 'We design care plans around you or your family\'s unique routines and preferences, with dedicated support whenever you need it.'
  },
  {
    icon: <SecurityIcon className="text-green-600" />,
    heading: 'Trusted Caregivers',
    text: 'Every team member is thoroughly vetted, trained, and committed to treating you and your loved ones like family.'
  },
  {
    icon: <GlobeIcon className="text-purple-600" />,
    heading: 'Flexible Options',
    text: 'From occasional help to 24/7 care, we adapt to your schedule—even for last-minute requests.'
  },
  {
    icon: <PriceIcon className="text-amber-600" />,
    heading: 'Honest Pricing',
    text: 'Clear, upfront costs with no hidden fees, so you can focus on what matters most.'
  },
];

const cards = [
  { 
    icon: <FlightIcon className="text-blue-600" fontSize="large" />,
    service: 'Flight Booking',
    amount: '120,000',
    image: ASSETS.FLIGHT,
    description: 'Find the best deals on flights worldwide with our exclusive airline partnerships.'
  },
  { 
    icon: <CarIcon className="text-green-600" fontSize="large" />,
    service: 'Car Rental',
    amount: '80,000',
    image: ASSETS.CAR,
    description: 'Premium vehicles at competitive rates with flexible rental options.'
  },
  { 
    icon: <HotelIcon className="text-amber-600" fontSize="large" />,
    service: 'Hotel Booking',
    amount: '65,000',
    image: ASSETS.HOTEL,
    description: 'Luxury accommodations handpicked for comfort and exceptional service.'
  }
];

const HeroSection = () => {
  return (
    <section className="relative h-[96vh] w-full">
        <Image
          alt="Hero Image"
          src={ASSETS.HOME_HERO}
          sizes="100vw"
          className="object-cover h-[96vh] object-center md:object-top absolute "
          unoptimized={true} // ← THIS IS THE KEY LINE
        />
    <div className='absolute top-0 right-0 bottom-0 left-0 h-full min-h-[96vh] z-[3] inset-0 bg-[linear-gradient(#00000080,#00000080)]'></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col justify-center text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6"
        >
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Your <span className="text-blue-400">Perfect</span> Journey
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300 sm:text-2xl">
            Crafting unforgettable travel experiences tailored just for you
          </p>
          
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={APP_ROUTES.TOURS}>
              <Button 
                className="flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold transition-all hover:bg-blue-600"
                background = 'var(--primary)'
              >
                Explore Destinations
                <ArrowForwardIcon />
              </Button>
            </Link>
            
            <Link href={APP_ROUTES.ABOUT}>
              <Button className="flex items-center gap-2 rounded-full border-2 border-red-500 bg-transparent px-8 py-4 text-lg font-semibold text-slate-600 hover:border-[var(--primary)] hover:border-2 hover:bg-red-500" background = 'white' color='#45556c'>
                Learn About Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-5 rounded-full border-2 border-white"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};



const SearchBar = () => {
  const [searchParams, setSearchParams] = useState({
    destination: '',
    dates: '',
    travelers: ''
  })
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    const queryString = new URLSearchParams({
      destination: searchParams.destination,
      dates: searchParams.dates,
      travelers: searchParams.travelers
    }).toString()
    router.push(`${APP_ROUTES.CONTACT}?${queryString}`)
  }

  return (
    <div className="container mx-auto -mt-20 z-20 relative px-6">
      <div className="rounded-xl bg-white p-6 shadow-2xl shadow-black/20">
        <form onSubmit={handleSearch}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <div className="relative">
                <PinIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Where to?" 
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={searchParams.destination}
                  onChange={(e) => setSearchParams({...searchParams, destination: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Check In - Check Out</label>
              <div className="relative">
                <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Select dates" 
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={searchParams.dates}
                  onChange={(e) => setSearchParams({...searchParams, dates: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Travelers</label>
              <div className="relative">
                <PeopleIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="2 Adults" 
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={searchParams.travelers}
                  onChange={(e) => setSearchParams({...searchParams, travelers: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex items-end">
              <button 
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 px-6 text-lg font-semibold text-white transition hover:bg-blue-700 focus:outline-none cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


const OurOffers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* <BulletPoints feature="Our Services" /> */}
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need for <span className="text-blue-600">Seamless Travel</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            From flights to accommodations and local experiences, we provide comprehensive travel solutions tailored to your preferences.
          </p>
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
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-12 md:flex-row">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="max-w-md">
              {/* <BulletPoints feature="Why Choose Us" /> */}
              <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                The <span className="text-blue-600">Proximite</span> Difference
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                We go beyond standard travel services to deliver exceptional experiences with personal touches that make all the difference.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {benefitItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.heading}</h3>
                  <p className="mt-2 text-gray-600">{item.text}</p>
                </motion.div>
              ))}
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

          {/* Image Grid
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={ASSETS.PARIS}
                  alt="Paris"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Paris</h3>
                  <p className="flex items-center">
                    <StarIcon className="mr-1 text-yellow-400" />
                    <span>4.8</span>
                  </p>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={ASSETS.GREECE}
                  alt="Greece"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">Greece</h3>
                  <p className="flex items-center">
                    <StarIcon className="mr-1 text-yellow-400" />
                    <span>4.9</span>
                  </p>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={ASSETS.CHINA}
                  alt="China"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">China</h3>
                  <p className="flex items-center">
                    <StarIcon className="mr-1 text-yellow-400" />
                    <span>4.7</span>
                  </p>
                </div>
              </div>
              
              <div className="relative h-64 overflow-hidden rounded-xl">
                <Image
                  src={ASSETS.LONDON}
                  alt="London"
                  className="object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold">London</h3>
                  <p className="flex items-center">
                    <StarIcon className="mr-1 text-yellow-400" />
                    <span>4.6</span>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

const PremiumTours = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* <BulletPoints feature="Premium Tours" position="center" /> */}
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Curated <span className="text-blue-600">Luxury Experiences</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover our handpicked collection of exclusive tours designed for discerning travelers.
          </p>
        </div>
        
        <PremiumTourCarousel tours={luxuryTours} />
        
        <div className="mt-12 text-center">
          <Link href={APP_ROUTES.TOURS}>
            <Button className="inline-flex items-center rounded-full border-2 border-blue-600 bg-white px-8 py-3 text-lg font-semibold text-blue-600 transition hover:bg-blue-50">
              View All Tours
              <ArrowForwardIcon className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* <BulletPoints feature="Explore" position="center" /> */}
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Popular <span className="text-blue-600">Destinations</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover the world's most captivating places to visit on your next adventure.
          </p>
        </div>
        
        <DestinationGrid destinations={popularDestinations} />
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* <BulletPoints feature="Testimonials" position="center" light /> */}
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            What Our <span className="text-blue-300">Travelers Say</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Hear from our satisfied customers about their exceptional travel experiences.
          </p>
        </div>
        
        <Testimonials testimonials={testimonials} />
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl md:p-12">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-8 md:mb-0 md:max-w-lg">
              <h2 className="text-3xl font-bold sm:text-4xl">Get Travel Inspiration</h2>
              <p className="mt-4 text-lg text-blue-100">
                Subscribe to our newsletter for exclusive deals, travel tips, and destination inspiration.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-white placeholder-blue-200 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-sm text-blue-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <SearchBar />
      <OurOffers />
      <Benefits />
      <PremiumTours />
      <PopularDestinations />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;

