'use client'

import { Image } from "@/components";
const Card = ({icon, service, amount, image}) => {
  return (
    <div className="group relative border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
    {/* Gray image placeholder (pure Tailwind) */}
    <div className="bg-gray-200 items-center w-full flex justify-center">

    <div className="w-full overflow-hidden md:h-64 h-52">
                    <Image alt="Air hostess" src={image} className='object-cover group-hover:scale-105 transition-transform duration-500 md:h-64 h-52'
                     sizes="(max-width: 768px) 100vw, 33vw" // Optimized for responsiveness
                     />
                  </div>
      {/* <svg 
        className="w-12 h-12 text-gray-400" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg> */}
    </div>
     {/* Card Content */}
     <div className="" style={{padding:'20px'}}>
        {/* Title */}
        <div className='flex items-center gap-x-2'>
            <div className="text-3xl font-semibold text-gray-900 line-clamp-2 flex items-center h-full" style={{padding:'10px 0px'}}>
            {service}
            </div>
            <span className='text-[#0065E7] h-full text-[50px] flex items-start'>
              {icon}
            </span>
            {/* <span className='text-[#0065E7] border'>
              {icon}
            </span>  */}
        </div>
        

        {/* Location & Price */}
        <div className="flex justify-between items-center mt-3 ">
          <div className='flex gap-x-2 items-center'>
            {/* <span className='text-[#0065E7]'>
              {icon}
            </span> */}
          <span className="text-sm text-gray-500 basis-4/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          </div>
          
          <span className="text-[14px] font-bold text-[#0065E7] bg-blue-100 rounded basis-2/4 text-center" style={{padding:'6px'}}>{amount} CFA</span>
        </div>
      </div>

      {/* Glow effect (pure Tailwind) */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-2 border-transparent group-hover:border-gray-100"></div>
    </div>
  );
};


export default Card;