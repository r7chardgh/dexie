'use client'
import { useCallback, useEffect } from 'react'

const Initiator = () => {
    const registerSW = useCallback(
        () => {
            navigator.serviceWorker.register('/sw.js').then(
                (reg) => {
                    console.log('Service worker registered: ', reg.scope);
                },
                (err) => {
                    console.error('Service worker registration failed: ', err);
                }
            );
        }
        , []);

    useEffect(() => {
        if (document.readyState === 'complete') {
            registerSW();
        } else {
            window.addEventListener('load', registerSW);
            return () => window.removeEventListener('load', registerSW);
        }
    }, [])

    return (
        <></>
    )
}

export default Initiator