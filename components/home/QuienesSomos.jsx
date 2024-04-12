
import React from "react";

const QuienesSomos = () => {
    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
    };

    return (

        <div className="mx-auto max-w-screen-xl bg-transparent  rounded-lg p-3 mx:p-10   transform flex-grow ">
            <div className="  rounded-lg p-8 md:p-5 flex flex-col items-center ">
                <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold mb-4">¿Quiénes somos?</h2>

                <p className="text-lg font-normal text-white dark:text-white text-justify">
                    En Ecomás, nos dedicamos a brindar un servicio de especialización para personas y profesionales que buscan ampliar sus conocimientos y habilidades en diversas áreas.
                </p>
            </div>
        </div>


    );
};

export default QuienesSomos;
