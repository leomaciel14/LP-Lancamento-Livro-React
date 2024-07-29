import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardsProdutos } from "./CardsProdutos";

export const OndeComprar = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/leomaciel14/JSON-Server/produtos")
            .then(response => {
                setProdutos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Houve um erro ao buscar os produtos:", error);
                setError("Não foi possível carregar os produtos no momento. Por favor, tente novamente mais tarde.");
                setLoading(false);
            });
    }, []);

    return (
        <div id="kits">
            <h1>Escolha seu Kit</h1>
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20"></div>
                </div>
            ) : error ? (
                <div className="text-red-500 text-xl">{error}</div>
            ) : (
                <div className="grid grid-cols-1 gap-12 p-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-2xl sm:text-base xl:text-xl">
                    {produtos.map((produto) => (
                        <CardsProdutos key={produto.id} produto={produto} />
                    ))}
                </div>
            )}
        </div>
    );
};
