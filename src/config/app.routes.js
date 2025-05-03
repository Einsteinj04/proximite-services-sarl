const domain = process.env.NEXT_PUBLIC_DOMAIN;
const production = process.env.NEXT_PUBLIC_PUB === "production";


const mainDomain = `${production ? 'https' : 'http'}://${domain}`;
const adminSubDomain = `${production ? 'https' : 'http'}://${domain}/subdomains/admin`;


export default {
	// DEVELOPER_URL: `https://promisedera.com`,

	HOST: `${mainDomain}`,
	ADMIN: `${adminSubDomain}`,

	HOME: `${mainDomain}/`,
	ABOUT: `${mainDomain}/about`,
	TOURS: `${mainDomain}/tours`,
	CONTACT: `${mainDomain}/contact`,
}