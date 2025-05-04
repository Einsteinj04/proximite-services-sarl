const BulletPoints= ({feature})=>{
  return(
    <>
      <div className='text-5xl text-slate-800' style={{ paddingBottom: '20px' }}>{feature}</div>
      <div className='h-2 w-[80px] bg-[var(--primary)]'></div>
    </>
    
  )
}

export default BulletPoints