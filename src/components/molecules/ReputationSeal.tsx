import { useEffect } from "react"

export const ReputationSeal = () => {

    useEffect(() => {

        //chamando o script do reclame aqui, pois o react nao permite injecao direta de script no código

        const script = document.createElement("script");
        script.id = "ra-embed-reputation";
        script.src = "https://s3.amazonaws.com/raichu-beta/selos/bundle.js";
        script.type = "text/javascript";
        script.setAttribute("data-id", "ODkxdGxfQ091NEtMOWVadjptY2MtYWxtZWlkYS1mYXJtYWNpYS1zb3JvY2FiYQ==");
        script.setAttribute("data-target", "reputation-ra");
        script.setAttribute("data-model", "1");

        const container = document.getElementById("reputation-ra");
        if (container && !document.getElementById("ra-embed-reputation")) {
            container.appendChild(script);
        }
    }, []);


    return <div id="reputation-ra" />



}