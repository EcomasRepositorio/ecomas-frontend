'use client';
import React from "react";
import ScrollAnimation from "./framerAnimation";

const NuestrosDiplomados = () => {



    return (
        <div >
            <div className="bg-gradient-to-r from-[#02227b] to-[#0060ff] px-4 p-3 md:p-8 transform">
                <ScrollAnimation >
                    <h2 className="text-white dark:text-white text-4xl font-extrabold mb-1 text-center">
                        Nuestros Diplomados
                    </h2>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default NuestrosDiplomados;
