'use client'
import React from 'react'
import { APP_ROUTES, ASSETS } from "@/config";
import { Image, Button } from "@/components";
import Link from 'next/link';
import { ArrowForwardIos} from "@mui/icons-material";

const Client = () => {
  return (
    <section className=' flex flex-col items-start justify-center relative'>
      <div className='absolute h-[96vh] w-full top-0 right-0 bottom-0 left-0 aspect-[16/9]'>
       <Image
          alt="Welcome to Proximite Services"
          src={ASSETS.HOME_HERO}
          className=" object-cover h-[96vh] w-full md:object-top object-center"
        />
    </div>
    <div className='absolute top-0 right-0 bottom-0 left-0 h-full min-h-[96vh] z-[3] inset-0 bg-[linear-gradient(#00000080,#00000080)]'></div>
    <section className='z-10  flex justify-center relative  w-full h-[96vh] gap-y-2  text-white '>
      <div className=' flex flex-col relative sm:top-[45%] top-[30%]'>
              <h1 className='text-5xl text-center'>Let's Make Your Best Trip Ever</h1>
              <p className='text-slate-300 text-2xl max-w-2xl text-center  '>Plan and book your perfect trip with expert advice. travel tips, destination information and inspiration from us</p>
              <div className='w-full flex justify-center h-[60px] items-center'>
              {/* <div className='max-w-[450px] mx-auto border-red-500 border-2 '> */}
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

export default Client;