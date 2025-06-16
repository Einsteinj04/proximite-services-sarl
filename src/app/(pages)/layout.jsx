import React from 'react';
import { Header, Footer } from '@/components';
// import { getContactInformation } from '@/app/_server';

const WebPagesLayout = async ({ children }) => {
	// const contactInformation = await getContactInformation();
	return (
		<div className=''>
			<Header />
			{children}
            <Footer/>
			{/* <Footer socialHandles={contactInformation?.socialHandles} /> */}
		</div>
	);
};

export default WebPagesLayout;
export const dynamic = 'force-dynamic';