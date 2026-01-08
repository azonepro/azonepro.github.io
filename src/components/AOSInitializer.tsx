"use client"

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AOSInitializer() {
    const pathname = usePathname();

    useEffect(() => {
        const initAOS = () => {
            // @ts-ignore
            if (typeof AOS !== 'undefined') {
                // @ts-ignore
                AOS.init({
                    duration: 1000,
                    easing: 'ease-in-out',
                    once: true,
                    mirror: false
                });
                // @ts-ignore
                AOS.refresh();
            }

            // Initialize Portfolio Sliders
            // @ts-ignore
            if (typeof Swiper !== 'undefined') {
                // @ts-ignore
                new Swiper('.portfolio-details-slider', {
                    speed: 400,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                });
            }
        };

        // Try initializing immediately
        initAOS();

        // Also retry after a short delay to account for script loading
        const timer = setTimeout(initAOS, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
