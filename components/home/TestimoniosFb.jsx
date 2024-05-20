'use client';
import { Button } from "@nextui-org/react";
import React from "react";

import ScrollAnimation from "./framerAnimation";
import Link from "next/link";

const TestimoniosFb = () => {

    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
        backgroundColor: "",
        borderRadius: "8px"

    };

    return (
        <ScrollAnimation>
            <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold  text-center">Nuestros Testimonios</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between items-center pb-6 ">
                <div>
                    <p className="text-lg mb-1 md:text-left md:mb-0 md:mr-4">Nuestras reseñas en Facebook:</p>
                    <p className="text-sm text-gray-500 md:text-left pb-4">4.9 calificación sobre 155 opiniones.</p>
                </div>
                <Button target="_blank" as={Link} href="https://web.facebook.com/ecomascyc" color="primary">
                    Califícanos
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02u1BQ4gz97rxrt835zqhUJ7N31erLAz7wALD4XqfpdDSwy2TtgttY5mvvXdQPCJ8Dl%26id%3D100074269517346&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="207"
                    frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen={true}
                    className=" bg-transparent  "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fjoseestefano.chalamendez%2Fposts%2Fpfbid0xmQ6un9qLcagW1QyLe94QvX8JYsv9eMBDYXetcPG9hEYu9HgFa5SR4JNjPRhtWD8l&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="220"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent "
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0iU9iBDnNANPjSug8YGM3VFohjfSHmaHVnnpibDY8JyALK7FGV38Hu2tiMEzCdYHYl%26id%3D100009446688365&show_text=true&width=500&is_preview=true"
                    style={iframeStyles}
                    height="207"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className=" bg-transparent "
                ></iframe>
            </div>

        </ScrollAnimation>
    );
};

export default TestimoniosFb;
