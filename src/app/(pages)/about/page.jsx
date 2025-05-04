import { APP_ROUTES, SUBDOMAINS, SITE_DATA } from '@/config';
import generateMetaData from '@/utils/metadata';
import Client from './client';

export async function generateMetadata({ params, searchParams }) {
    return await generateMetaData({ title: `About Us | ${SITE_DATA.NAME}`, host: SUBDOMAINS.ROOT, url: APP_ROUTES.ABOUT });
}

const About = async () => {
    return <Client />;
};

export default About;
