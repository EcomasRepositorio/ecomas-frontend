import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function ScrollToTopButton() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    return (
        <button
            className={`fixed bottom-10 right-0 bg-primaryblue text-white rounded-s-full px-4 py-2  mb-[71px] z-50 items-center text-xs flex gap-2`}
            onClick={scrollToTop}
        >
            VOLVER ARRIBA
            <IoIosArrowUp className="inline-block h-4 w-4" />
        </button>
    );
}

export default ScrollToTopButton;
