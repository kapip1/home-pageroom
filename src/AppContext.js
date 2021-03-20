import React, { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider({ children }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleCurrentSlide = (arg) => {
        switch (arg) {
            case '1':
                currentSlide === 2
                    ? setCurrentSlide(0)
                    : setCurrentSlide((prev) => prev + 1);
                break;
            case '2':
                currentSlide === 0
                    ? setCurrentSlide(2)
                    : setCurrentSlide((prev) => prev - 1);
                break;
            default:
                throw Error('bład');
        }
    };

    return (
        <AppContext.Provider value={{ currentSlide, handleCurrentSlide }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
