"use client";

import { ContactButton } from "../molecules/ContactButton";
import { Carrossel } from "../organisms/Carrossel";
import { ListaDeConvenios } from "../molecules/ConvenioButton";
import PlaceIcon from "@mui/icons-material/Place";

export function CartaoVisita() {
    return (
        <div className="flex justify-center items-start w-full mt-2">
            <div className="flex flex-col lg:flex-row max-w-7xl w-full rounded-lg">
                {/* Carrossel fixo */}
                <div className="hidden lg:block lg:flex-1">
                    <Carrossel
                        imgs={[
                            "images/carrossel/1.jpeg",
                            "images/carrossel/2.jpg",
                            "images/carrossel/16.jpeg",
                            "images/carrossel/3.jpg",
                            "images/carrossel/4.jpg",
                            "images/carrossel/5.jpg",
                            "images/carrossel/6.jpg",
                            "images/carrossel/7.jpg",
                            "images/carrossel/8.jpg",
                            "images/carrossel/9.jpg",
                            "images/carrossel/10.jpg",
                            "images/carrossel/12.jpg",
                            "images/carrossel/13.jpg",
                            "images/carrossel/14.jpg",
                            "images/carrossel/15.jpg"

                        ]}
                    />
                </div>

                {/* Contatos com rolagem */}
                <div className="flex flex-col lg:overflow-y-auto lg:max-h-[70vh] w-full lg:w-3/5 ml-0 lg:ml-10 lg:mt-0 space-y-4 lg:space-y-2 p-4 lg:p-2">
                    {/* Lista de botões de contato */}
                    <div className="grid grid-cols-1 gap-3">

                        <ContactButton
                            href="https://api.whatsapp.com/send?l=pt_br&phone=551532265175"
                            imgSrc="icons/fast-delivery.png"
                            imgHeight={52}
                            imgWidth={52}
                            text="Receba seu pedido em casa!"
                            textHoverClass="hover:scale-105 hover:transform hover:duration-300"
                            fontSize="text-xl"

                        />

                        <ContactButton
                            href="https://webapp.clinicarx.com.br/onde-encontrar/mcc-almeida-farmacia-sorocaba-eireli/bb4fc3fe-8ea9-4f96-a90b-7e1cac3a1575"
                            imgSrc="icons/schedule.png"
                            text="Agende seus Exames e Serviços Farmacêuticos"
                            hoverClass=" hover:text-red-600"
                        />
                        <ContactButton
                            href="https://g.page/r/CSbjmEdK76x7EB0/review"
                            imgSrc="icons/avaliacao.png"
                            text="Sua opinião conta! Avalie-nos no Google"
                            hoverClass=" hover:text-red-600"
                            imgWidth={100}
                            fontSize="text-lg"
                        />






                        <ContactButton
                            href="https://l.ead.me/bcpOcb"
                            imgSrc="icons/app.png"
                            text="Baixe Nosso App e consulte nossos preços e estoque!"
                            hoverClass=" hover:text-red-600"
                        />

                        <ContactButton
                            href="https://api.whatsapp.com/send?l=pt_br&phone=551532265175"
                            imgSrc="icons/telephone.png"
                            text="Fale com nossos Farmacêuticos: Marisa CRF 66635  /  Cesar CRF 38302"
                            hoverClass=" hover:text-red-600"
                        />

                        <ContactButton
                            href="https://www.instagram.com/bigfortsaoconrado/"
                            imgSrc="icons/instagram.png"
                            text="Instagram"
                            hoverClass=" hover:text-red-600"
                        />
                        <ContactButton
                            href="https://www.facebook.com/bfsaoconrado/?locale=pt_BR"
                            imgSrc="icons/facebook.png"
                            text="Facebook"
                            hoverClass=" hover:text-red-600"
                        />

                        <ContactButton
                            href="https://www.tiktok.com/@bigfortsaoconrado?_t=ZS-8t794KVwEJL&_r=1"
                            imgSrc="icons/tiktok.png"
                            text="TikTok"
                            hoverClass=" hover:text-red-600"
                        />

                        <ContactButton
                            href="https://youtube.com/@cesarfarmaceutico?si=Mp7yEF4U_-8roXPo"
                            imgSrc="icons/youtube.png"
                            text="Youtube"
                            hoverClass=" hover:text-red-600"
                        />



                        <ContactButton
                            href="https://www.ifood.com.br/delivery/sorocaba-sp/farmacias-bigfort-sao-conrado-sao-conrado/f9f81a59-fd23-4d1a-8552-8eff1927c50f?utm_medium=share"
                            imgSrc="icons/ifood.png"
                            text="Peça pelo Ifood"
                            hoverClass=" hover:text-red-600"
                        />


                        <ContactButton
                            href="https://l.ead.me/bcpOcb"
                            imgSrc="icons/medicine-floral.png"
                            text="Saiba mais sobre a Terapia Floral (Em Contrução)"
                            hoverClass=" hover:text-red-600"
                        />

                        <ContactButton
                            href="mailto:cesaotablet@gmail.com"
                            imgSrc="icons/mail.png"
                            text="Venha fazer parte da equipe Bigfort São Conrado "
                            hoverClass=" hover:text-red-600"
                        />

                    </div>

                    {/* Footer */}
                    <div className="flex flex-col items-center text-center font-semibold text-xs lg:text-sm space-y-2 mt-4 lg:mt-2">


                        <p className="text-red-600 font-extrabold">BIGFORT SÃO CONRADO DE SOROCABA</p>
                        <p>RUA LUÍZ RICARDO MAFFEI 1273</p>
                        <p>18076-320 SÃO CONRADO - SOROCABA/SP</p>
                        <a
                            href="https://maps.app.goo.gl/RsyN36Na3yQfwRqR7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group hover:text-red-500 transition duration-300"
                        >
                            <div className="flex items-center space-x-2">
                                <p className="text-blue-800 underline group-hover:text-red-500">VER NO MAPA</p>
                                <PlaceIcon className="text-blue-800 group-hover:text-red-500" />
                            </div>
                        </a>
                        <p className="text-black font-bold text-center mt-2">CNPJ: 31.708.168/0001-80</p>


                        <ListaDeConvenios visibilidadeDispositivo="md:hidden" alturaImagens="h-30" />


                    </div>
                </div>
            </div>
        </div>
    );
}


