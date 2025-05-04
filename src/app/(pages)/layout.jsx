import React from 'react';
import { Header, Footer } from '@/components';
// import { getContactInformation } from '@/app/_server';

const WebPagesLayout = async ({ children }) => {
	// const contactInformation = await getContactInformation();
	return (
		<div className=''>
			<Header />
			{children}
			{/* <div className='h-[1030px] bg-red-300'>Hi bitch</div> */}
            <Footer/>
			{/* <Footer socialHandles={contactInformation?.socialHandles} /> */}
		</div>
	);
};

export default WebPagesLayout;
export const dynamic = 'force-dynamic';