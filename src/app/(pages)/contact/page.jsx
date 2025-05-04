import { APP_ROUTES, SUBDOMAINS, SITE_DATA } from '@/config';
import generateMetaData from '@/utils/metadata';
import Client from './client';

export async function generateMetadata({ params, searchParams }) {
    return await generateMetaData({ title: `Contacts | ${SITE_DATA.NAME}`, host: SUBDOMAINS.ROOT, url: APP_ROUTES.CONTACT });
}

const Contact = async () => {
    return <Client />;
};

export default Contact;
