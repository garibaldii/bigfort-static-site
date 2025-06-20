import React, { useState, useEffect } from "react";




export function Carrossel({imgs = ['']}) {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [larguraTela, setLarguraTela] = useState(0);  // Inicializa com valor 0
    const [isClient, setIsClient] = useState(false);    // Verifica se está no cliente

    // Função para mover para o slide anterior
    const slideAnterior = () => {
        setIndiceAtual((prevIndice) =>
            prevIndice === 0 ? imgs.length - 1 : prevIndice - 1
        );
    };

    // Função para mover para o próximo slide
    const proximoSlide = () => {
        setIndiceAtual((prevIndice) => (prevIndice + 1) % imgs.length);
    };

    // Efeito para atualizar a largura da tela e verificar se está no cliente
    useEffect(() => {
        // Defina o estado isClient para true quando o componente for montado
        setIsClient(true);

        const handleResize = () => {
            setLarguraTela(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize();  // Chama a função para capturar a largura inicial

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Efeito para avançar automaticamente para o próximo slide a cada 3 segundos
    useEffect(() => {
        if (!isClient || larguraTela < 768) return; // Não faz nada se não estiver no cliente ou em telas pequenas

        const intervalo = setInterval(() => {
            proximoSlide(); // Chama a função para ir para o próximo slide
        }, 3000); // A cada 3 segundos (3000 milissegundos)

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
    }, [isClient, larguraTela]); // A dependência de larguraTela é para garantir que só execute após o componente ser montado e a tela ser verificada

    // Só renderiza no cliente e para telas grandes
    if (!isClient || larguraTela < 768) {
        return null; // Remove o carrossel para telas pequenas ou se não estiver no cliente
    }

    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full max-w-4xl bg-gray-200 rounded-lg overflow-hidden">
                {/* Contêiner das imgs com transição */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        width: `${imgs.length * 100}%`,
                        transform: `translateX(-${indiceAtual * (100 / imgs.length)}%)`
                    }}
                >
                    {imgs.map((imagem, index) => (
                        <img
                            key={index}
                            src={imagem}
                            alt={`Slide ${index + 1}`}
                            className="object-cover w-full h-[500px] flex-shrink-0"
                            style={{ width: `${100 / imgs.length}%` }}
                        />
                    ))}
                </div>

                {/* Botões de navegação */}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                    onClick={slideAnterior}
                >
                    &#10094;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                    onClick={proximoSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
}
