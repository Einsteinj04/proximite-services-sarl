const BulletPoints= ({feature, position})=>{
  return(
    <div className='w-auto'>
      <div className={`text-5xl text-slate-800 flex justify-${position}`} style={{ paddingBottom: '20px' }}>{feature}</div>
      <div className={`w-full flex justify-${position}`}>
        <div className='h-2  w-[80px] bg-[var(--primary)]'></div>
      </div>
    </div>
    
  )
}

export default BulletPoints