'use client';
import { useEffect, useState, RefObject,useRef, useCallback } from 'react';

export const SmoothScrollToLink = ({ element, elementAttributeName }) => {
	useEffect(() => {
		const handleScroll = (e, anchor) => {
			e.preventDefault();

			const targetId = anchor.getAttribute(elementAttributeName).substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				const rect = targetElement.getBoundingClientRect();
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

				window.scrollTo({
					top: rect.top + scrollTop,
					behavior: 'smooth'
				});
			}
		};
		document.querySelectorAll(element).forEach((anchor) => anchor.addEventListener('click', (e) => handleScroll(e, anchor)));
		return () => {
			document.querySelectorAll(element).forEach((anchor) => anchor.removeEventListener('click', (e) => handleScroll(e, anchor)));
		};
	}, [elementAttributeName]);
};

export const HideShowNavbarOnScroll=({initialScrollLength,furtherScrollLength})=>{
	const [hideNavbar, setHideNavBar] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const lastScrollY = useRef(0);

	const handleScroll = useCallback(() => {
		const currentScrollY = window.scrollY;
	
		setIsScrolled(currentScrollY > initialScrollLength);
	
		if (currentScrollY > furtherScrollLength && currentScrollY > lastScrollY.current) {
		  setHideNavBar(true);
		} else if (currentScrollY < lastScrollY.current) {
		  setHideNavBar(false);
		}
	
		lastScrollY.current = currentScrollY;
	  }, [initialScrollLength, furtherScrollLength]);

	  useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	  }, [handleScroll]);
	
	  return { hideNavbar, isScrolled };
}

// export const HideShowNavbarOnScroll = ({ targetRef, className, startPosition }) => {
// 	useEffect(() => {
// 		var prevScrollpos = window.pageYOffset;
// 		const handleFunction = () => {
// 			if (!targetRef?.current) return;
// 			if (window.scrollY === 0) targetRef?.current?.classList?.remove(...className?.split(' '));
// 			if (window.scrollY < startPosition) return;

// 			var currentScrollPos = window.pageYOffset;
// 			if (prevScrollpos > currentScrollPos) targetRef?.current?.classList?.remove(...className?.split(' '));
// 			else targetRef?.current?.classList?.add(...className?.split(' '));
// 			prevScrollpos = currentScrollPos;
// 		};

// 		window.addEventListener('scroll', handleFunction);
// 		return () => window.removeEventListener('scroll', handleFunction);
// 	}, [targetRef, className]);
// };

export const ChangeClassNameAtPosition = ({ targetRef, startPosition, className }) => {
	useEffect(() => {
		const handleFunction = () => {
			if (!targetRef?.current) return;
			if (window.scrollY > startPosition) targetRef?.current?.classList?.add(...className?.split(' '));
			else targetRef?.current?.classList?.remove(...className?.split(' '));
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, [targetRef, startPosition]);
};

export const LoadMoreDataAtWindowBottom = ({ fetching }) => {
	const [loadMore, setLoadMore] = useState(false);
	const [scrollPos, setScrollPos] = useState('');

	useEffect(() => {
		const handleFunction = () => {
			if (fetching) return;
			if (window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight) {
				setLoadMore(true);
				setScrollPos(window.scrollY);
			} else {
				if (fetching) return;
				setLoadMore(false);
			}
		};

		window.addEventListener('scroll', handleFunction);
		return () => window.removeEventListener('scroll', handleFunction);
	}, [fetching]);

	return { loadMore, scrollPos };
};

export const ShowElementAtPosition = ({ targetRef, position }) => {
	useEffect(() => {
		const handleFunction = () => {
			if (!targetRef?.current) return;
			if (window.scrollY > position || document.documentElement.scrollTop > position) targetRef.current.style.display = 'block';
			else targetRef.current.style.display = 'none';
		};

		window.addEventListener('scroll', () => handleFunction());
		return () => window.removeEventListener('scroll', () => handleFunction());
	}, [targetRef, position]);
};
