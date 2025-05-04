import { APP_ROUTES, SUBDOMAINS, SITE_DATA } from '@/config';
import generateMetaData from '@/utils/metadata';
import Client from './client';

export async function generateMetadata({ params, searchParams }) {
    return await generateMetaData({ title: `Tours | ${SITE_DATA.NAME}`, host: SUBDOMAINS.ROOT, url: APP_ROUTES.TOURS});
}

const Tours = async () => {
    return <Client />;
};

export default Tours;
