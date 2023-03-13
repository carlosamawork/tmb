import React, { createContext, useEffect, useState } from "react";

import debounce from '../utils/debounce';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    })

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        handleResize();

        const debouncedHandleResize = debounce(handleResize, 200);

        window.addEventListener('resize', debouncedHandleResize);

        return () => window.removeEventListener('resize', debouncedHandleResize);

    }, []);

    return (
        <MainContext.Provider value={{
            windowSize,

        }}>{children}</MainContext.Provider>
    )

}

MainContext.displayName = 'MainContext';