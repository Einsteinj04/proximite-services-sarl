'use server';
import { SUBDOMAINS, SITE_DATA } from '@/config';

const metadata = {
	applicationName: SITE_DATA.NAME,
	manifest: '/manifest.json',
	referrer: 'origin-when-cross-origin',
	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: false,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: 'default',
		// startUpImage: [],
	},
	other: {
		'mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-capable': 'yes',
		'apple-mobile-web-app-status-bar-style': 'black-translucent',
	},
};

const keywords = [];
const description = '';
const ogDescription = '';
const twitterDescription = '';

const generateMetaData = async ({ title, host, url }) => {
	switch (host) {
		case SUBDOMAINS.ROOT: // proximiteservicessarl.com
			return {
				...metadata,
				title,
				metadataBase: new URL(`${SUBDOMAINS.ROOT}`),
				alternates: { canonical: url },
				description,
				keywords,
				openGraph: {
					url,
					title,
					description: ogDescription,
					siteName: SITE_DATA.NAME,
					// images: [
					// 	{
					// 		url: `${SUBDOMAINS.ROOT}/icons/og.png`,
					// 		width: 800,
					// 		height: 600,
					// 	},
					// 	{
					// 		url: `${SUBDOMAINS.ROOT}/icons/og.png`,
					// 		width: 1920,
					// 		height: 1920,
					// 	},
					// ],
					locale: 'en_US',
					type: 'website',
				},
				// twitter: {
				// 	card: 'summary',
				// 	title,
				// 	description: twitterDescription,
				// 	images: [`${SUBDOMAINS.ROOT}/icons/og.png`],
				// 	site: SITE_DATA.TWITTER_HANDLE,
				// },
				robots: {
					index: true,
					follow: true,
					nocache: true,
					googleBot: {
						index: true,
						follow: true,
						noimageindex: false,
						'max-video-preview': -1,
						'max-image-preview': 'large',
						'max-snippet': -1,
					},
				},
			};
		case SUBDOMAINS.ADMIN: // admin.proximiteservicessarl.com
			return {
				...metadata,
				title,
				metadataBase: new URL(`${SUBDOMAINS.ADMIN}`),
			};
		case SUBDOMAINS.ACCOUNTS: // accounts.proximiteservicessarl.com
			return {
				...metadata,
				title,
				metadataBase: new URL(`${SUBDOMAINS.ACCOUNTS}`),
			};
		default:
			return {};
	}
};

export default generateMetaData;
