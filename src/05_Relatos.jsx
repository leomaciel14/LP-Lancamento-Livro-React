import React from "react";

export const Relatos = () => {
    const relatos = [
        {
            id: 1,
            imagem: "./src/assets/imgs/insta-01.webp",
            alt: "texto alternativo",
        },
        {
            id: 2,
            imagem: "./src/assets/imgs/insta-02.webp",
            alt: "texto alternativo 2",
        },
        {
            id: 3,
            imagem: "./src/assets/imgs/insta-03.webp",
            alt: "texto alternativo 3",
        },
        {
            id: 4,
            imagem: "./src/assets/imgs/insta-04.webp",
            alt: "texto alternativo 4",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center m-auto">
            <div className="flex flex-col sm:flex-row items-center m-auto p-12">
                <img
                    className="w-20 mt-0 fill-white"
                    src="./src/assets/imgs/cruz-02.svg"
                    alt="Cruz"
                />
                <h1 className="text-4xl px-10 mt-6 sm:mt-0 sm:text-5xl font-bold">
                    Relatos de quem já garantiu sua leitura
                </h1>
                <img
                    className="sm:w-20 w-0 mt-0"
                    src="./src/assets/imgs/cruz-02.svg"
                    alt="Cruz"
                />
            </div>
            <div className="grid items-center justify-center grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                {relatos.map((relatos) => (
                    <img
                        className="w-fit"
                        id={relatos.id}
                        src={relatos.imagem}
                        alt={relatos.alt}
                    />
                ))}
            </div>
        </div>
    );
};
