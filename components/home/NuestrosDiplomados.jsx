import { Divider } from "@nextui-org/react";
import React from "react";


const NuestrosDiplomados = () => {
    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
    };

    return (

            <div className="bg-gradient-to-r from-[#02227b] to-[#0060ff]   px-4   rounded-lg p-3 md:p-8  transform  ">
                <div className=" rounded-lg p-8 md:p-5 flex flex-col items-center">
                    <h2 className="text-white dark:text-white text-4xl font-extrabold mb-1">Nuestros Diplomados</h2>
                </div>
            </div>


    );
};

export default NuestrosDiplomados;
