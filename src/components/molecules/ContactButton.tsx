interface ContactButtonProps {
    href?: string;           // URL para o link
    imgSrc: string;         // Caminho para a imagem
    text?: string;           // Texto a ser exibido no botão
    highlight?: boolean;    // Define se o botão terá destaque (opcional)
    textHoverClass?: string; // Classe CSS para o efeito de hover do texto (opcional)
    hoverClass?: string;    // Classe CSS para o efeito de hover do botão (opcional)
    fontSize?: string;      // Tamanho da fonte do texto (opcional)
    imgWidth?: number;      // Largura da imagem (opcional)
    imgHeight?: number;     // Altura da imagem (opcional)
    bgOpacity?: string;     // Classe CSS para opacidade do fundo (opcional)
}

export function ContactButton({
    href,
    imgSrc,
    text,
    highlight = false,
    textHoverClass = "",
    hoverClass = "",
    fontSize = "text-base", // Valor padrão do tamanho da fonte
    imgWidth = 32,          // Valor padrão da largura da imagem
    imgHeight = 32,         // Valor padrão da altura da imagem
    bgOpacity = "bg-opacity-60", // Opacidade padrão do fundo
}: ContactButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition duration-100 h-full w-full ${
                highlight
                    ? `border-2 border-red-600 bg-red-600 text-white ${bgOpacity}`
                    : `border bg-white text-black ${bgOpacity}`
            } rounded-lg p-4 flex items-center shadow-md ${hoverClass}`}
        >
            <img src={imgSrc} alt={text} className="mr-3" width={imgWidth} height={imgHeight} />
            <p className={`font-bold transition ${fontSize} ${textHoverClass}`}>{text}</p>
        </a>
    );
}
