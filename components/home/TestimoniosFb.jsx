import React from "react";

const TestimoniosFb = () => {
    const iframeStyles = {
        border: "none",
        overflow: "hidden",
        marginBottom: "10px", // Ajusta el margen entre los iframes según tus preferencias
        width: "100%",
    };

    return (
        <div className="bg-white dark:bg-black rounded-lg p-8 ">
            <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold mb-8 text-center">Nuestros Testimonios</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between items-center pb-6 ">
                <div>
                    <p className="text-lg mb-1 md:text-left md:mb-0 md:mr-4">Nuestras reseñas en Facebook:</p>
                    <p className="text-sm text-gray-500 md:text-left pb-4">5.0 calificación sobre 130 opiniones.</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Califícanos
                </button>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fmaricriszorrilla%2Fposts%2Fpfbid02bAdL6m4nm6xF6gsvhaBmNkyYRKq25QNWyPUse9VEe85iEuoddnEjxVoBtAsyBFXnl&show_text=true&width=500"
                    style={iframeStyles}
                    height="230"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fhector.antony.5%2Fposts%2Fpfbid0Zht4WiHqn34uUDLUzwQ19TFMAZtg3yXRhBUYgc4FnHfEkWt9nvo4GV8vx7A1zr5Sl&show_text=true&width=500"
                    style={iframeStyles}
                    height="230"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>

                <iframe
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fcristianyoel.riveramija%2Fposts%2Fpfbid0cn17sGGFwthyBYY1dZPyLLtjg9qACEn2wTSeTunsw6jNJkDDnUwurQUeDPiuH1HHl&show_text=true&width=500"
                    style={iframeStyles}
                    height="230"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    );
};

export default TestimoniosFb;
