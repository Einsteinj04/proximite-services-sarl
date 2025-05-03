import { APP_ROUTES, SUBDOMAINS, SITE_DATA } from '@/config';
import generateMetaData from '@/utils/metadata';
import Client from './client';

export async function generateMetadata({ params, searchParams }) {
	return await generateMetaData({ title: `Home | ${SITE_DATA.NAME}`, host: SUBDOMAINS.ROOT, url: APP_ROUTES.HOME });
}

const Home = async () => {
	return <Client />;
};

export default Home;
