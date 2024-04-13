import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const NuestrosDiplomados = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    const handleScroll = () => {
        const elementPosition = containerRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            setIsVisible(true);
        }
    };

    // Attach scroll event listener when component mounts
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Cleanup function to remove the event listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        if (isVisible) {
            controls.start("visible");
        }
    }, [isVisible]);

    return (
        <div ref={containerRef}>
            <div className="bg-gradient-to-r from-[#02227b] to-[#0060ff] px-4 p-3 md:p-8 transform ">
                <motion.div
                    className="rounded-lg p-8 md:p-5 flex flex-col items-center"
                    initial="hidden"
                    animate={controls}
                    variants={variants}>
                    <h2 className="text-white dark:text-white text-4xl font-extrabold mb-1">
                        Nuestros Diplomados
                    </h2>
                </motion.div>
            </div>
        </div>
    );
};

export default NuestrosDiplomados;
