interface ListaDeConveniosProps {
    visibilidadeDispositivo: string;
    alturaImagens?: string;
    larguraImagens?: string;
}

const logos = [
    "icons/convenio/visa.png",
    "icons/convenio/funcional_card.png",
    "icons/convenio/redecard.png",
    "icons/convenio/sspms.png",
    "icons/convenio/vidalink.png",
    "icons/convenio/golden_farma.jpeg",
    "icons/convenio/system_farma.png",
    "icons/convenio/epharma.png"
]

export function ListaDeConvenios({
    visibilidadeDispositivo,
    larguraImagens = "w-[100px]",
    alturaImagens = "h-12"
}: ListaDeConveniosProps) {


    const dimensionaLogo = () => {
        return logos.map((logo, index) => (
            <img key={index} src={logo} className={`${larguraImagens} ${alturaImagens} object-contain`} />
        ));
    };



    return (
        <div className={`${visibilidadeDispositivo} flex flex-col items-center gap-2 rounded-lg `}>
            <p>CONVÊNIOS</p>

            <div className="flex flex-wrap justify-center gap-2 w-full">
                {dimensionaLogo()}
            </div>
        </div>
    )





}