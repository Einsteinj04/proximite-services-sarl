import React from 'react';
import { Header, Footer } from '@/components';
// import { getContactInformation } from '@/app/_server';

// const WebPagesLayout = async ({ children }) => {
// 	// const contactInformation = await getContactInformation();
// 	return (
// 		<div className='w-full mx-auto'>
// 			<div className='max-w-[2000px] border-2 bg-red-500 '>
// 				{/* <Header /> */}
// 				{children}
// 				<Footer/>
// 				{/* <Footer socialHandles={contactInformation?.socialHandles} /> */}
// 			</div>
			
// 		</div>
// 	);
// };
const WebPagesLayout = async ({ children }) => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="mx-auto w-full max-w-[2000px] flex-1 flex flex-col ">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default WebPagesLayout;
export const dynamic = 'force-dynamic';