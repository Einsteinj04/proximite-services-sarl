import APP_ROUTES from './app.routes.js';
import * as ASSETS from './assets';



const SITE_DATA = {
	NAME: 'Proximteservicessarl',
	OFFICIAL_NAME: 'proximiteservicessarl.com',
	// TWITTER_HANDLE: '',
};
const SUBDOMAINS = {
	ROOT: APP_ROUTES.HOST,
	ADMIN: APP_ROUTES.ADMIN,
	// ACCOUNTS: APP_ROUTES.ACCOUNTS,
};



export {
	APP_ROUTES,
	SUBDOMAINS,
    SITE_DATA,
	ASSETS,
};