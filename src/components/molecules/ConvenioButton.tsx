import { ReputationSeal } from "./ReputationSeal";

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
    "icons/convenio/epharma.png",
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
        <div className={`${visibilidadeDispositivo} flex flex-col items-center rounded-lg `}>
            <p>CONVÊNIOS</p>

            <div className="flex flex-wrap justify-center gap-2 w-full items-center">

                {/*Reclame Aqui Dinâmico*/}
                {/* <ReputationSeal /> */}

                <a
                    href="https://www.reclameaqui.com.br/empresa/mcc-almeida-farmacia-sorocaba/?utm_source=referral&utm_medium=embbed&utm_campaign=reputacao&utm_term=vertical"
                    target="_blank"

                >
                    <img src="images/reclame-aqui.png" className={` h-16 object-contain`} />
                </a>

                {dimensionaLogo()}
            </div>
        </div>
    )





}