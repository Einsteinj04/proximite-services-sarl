'use client';
import { APP_ROUTES } from '@/config';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const defaultURL = APP_ROUTES.HOME;
const useWindowLocation = () => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [windowLocation, setWindowLocation] = useState(defaultURL);

	useEffect(() => {
		setWindowLocation(window.location.href);
	}, [pathname, searchParams]);

	return { windowLocation, pathname, searchParams };
};

export default useWindowLocation;
