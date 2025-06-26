'use client';
const BenefitCards = ({icon, heading, text})=>{
  return(
    <div className=' flex flex-col gap-x-2'>
      <div className='flex gap-x-2 items-center sm:w-[90%]'>
        <span className='text-[#0065E7] text-[40px]'>{icon}</span>
        <div className='text-3xl text-slate-900 font-500'>{heading}</div>
      </div>
      <div className='text-slate-500 text-xl'>{text}</div>
    </div>
  )
}

export default BenefitCards