"use client"

import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback timeout to ensure it disappears even if load event fails
            const timer = setTimeout(handleLoad, 3000);
            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(timer);
            };
        }
    }, []);

    if (!loading) return null;

    return <div id="preloader"></div>;
}
