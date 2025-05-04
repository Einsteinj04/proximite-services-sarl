'use client'
import React from 'react'
import { APP_ROUTES, ASSETS } from "@/config";
import { Image, Button, BulletPoints, Card } from "@/components";
import Link from 'next/link';
import { ArrowForwardIos, FlightTakeoff, DirectionsCar, House} from "@mui/icons-material";



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
      <section className=' flex flex-col items-start justify-center relative section-x'>
      <div className='absolute h-[96vh] w-full top-0 right-0 bottom-0 left-0 aspect-[16/9]'>
       <Image
          alt="Welcome to Proximite Services"
          src={ASSETS.HOME_HERO}
          className=" object-cover h-[96vh] w-full md:object-top object-center"
        />
    </div>
    <div className='absolute top-0 right-0 bottom-0 left-0 h-full min-h-[96vh] z-[3] inset-0 bg-[linear-gradient(#00000080,#00000080)]'></div>
    <section className='z-10  flex flex-col justify-center relative  w-full h-[96vh]  text-white  items-center '>
      <div className=' relative sm:top-[10%]  flex  gap-y-4 flex-col'>
              <h1 className='sm:text-5xl text-4xl text-center'>Let's Make Your Best Trip Ever</h1>
              <p className='text-slate-300 sm:text-[20px] ; max-w-2xl text-center  mx-auto  text-[18px]'>Plan and book your perfect trip with expert advice. travel tips, destination information and inspiration from us</p>
              <div className='w-full flex justify-center h-[60px] items-center'>
              <Link className='font-metro-sans ' href={APP_ROUTES.CONTACT}>
                            <Button color='#fff' background='var(--primary)' className={`font-[700] font-metro-sans text-xs flex sm:gap-x-4 gap-x-2 max-w-[450px] mx-auto px-4`}>
                              <div className='text-xl '>BOOK NOW</div> <ArrowForwardIos/>
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



      <div className="container mx-auto px-4 py-12">
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

const Client = () => {
  return (<div className='w-full h-full'>
    <HeroSection/>
    <OurOffers/>
  </div>
  )
}

export default Client;