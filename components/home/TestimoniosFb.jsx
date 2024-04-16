'use client';
import { Button } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TestimoniosFb = () => {
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
    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
    };

    return (
        <motion.div ref={containerRef} className="" initial="hidden"
        animate={controls}
        variants={variants}>
            <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold  text-center">Nuestros Testimonios</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between items-center pb-6 ">
                <div>
                    <p className="text-lg mb-1 md:text-left md:mb-0 md:mr-4">Nuestras reseñas en Facebook:</p>
                    <p className="text-sm text-gray-500 md:text-left pb-4">5.0 calificación sobre 130 opiniones.</p>
                </div>
                <Button color= "primary">
                    Califícanos
                </Button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent">
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fmaricriszorrilla%2Fposts%2Fpfbid02bAdL6m4nm6xF6gsvhaBmNkyYRKq25QNWyPUse9VEe85iEuoddnEjxVoBtAsyBFXnl&show_text=true&width=500"
                    style={iframeStyles}
                    height="210"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent  "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fhector.antony.5%2Fposts%2Fpfbid0Zht4WiHqn34uUDLUzwQ19TFMAZtg3yXRhBUYgc4FnHfEkWt9nvo4GV8vx7A1zr5Sl&show_text=true&width=500"
                    style={iframeStyles}
                    height="170"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fcristianyoel.riveramija%2Fposts%2Fpfbid0cn17sGGFwthyBYY1dZPyLLtjg9qACEn2wTSeTunsw6jNJkDDnUwurQUeDPiuH1HHl&show_text=true&width=500"
                    style={iframeStyles}
                    height="190"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent " 
                ></iframe>
            </div>

        </motion.div>
    );
};

export default TestimoniosFb;
