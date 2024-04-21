'use client';
import { Button } from "@nextui-org/react";
import React from "react";

import ScrollAnimation from "./framerAnimation";

const TestimoniosFb = () => {

    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
    };

    return (
        <ScrollAnimation>
            <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold  text-center">Nuestros Testimonios</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between items-center pb-6 ">
                <div>
                    <p className="text-lg mb-1 md:text-left md:mb-0 md:mr-4">Nuestras reseñas en Facebook:</p>
                    <p className="text-sm text-gray-500 md:text-left pb-4">4.9 calificación sobre 155 opiniones.</p>
                </div>
                <Button color="primary">
                    Califícanos
                </Button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-transparent">
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02u1BQ4gz97rxrt835zqhUJ7N31erLAz7wALD4XqfpdDSwy2TtgttY5mvvXdQPCJ8Dl%26id%3D100074269517346&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="210"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent  "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Flisbethzita.huaman%2Fposts%2Fpfbid02AE9MWUvARMwhf9HkJ7zepMmduraj2KNwhE8uNooMng622eJUutnAfxsDEhApqpGNl&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="300"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0iU9iBDnNANPjSug8YGM3VFohjfSHmaHVnnpibDY8JyALK7FGV38Hu2tiMEzCdYHYl%26id%3D100009446688365&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="190"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent "
                ></iframe>
            </div>

        </ScrollAnimation>
    );
};

export default TestimoniosFb;
