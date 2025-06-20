import { ListaDeConvenios } from "../molecules/ConvenioButton";


export function NavBar() {
    return (
        <div className="flex md:flex-row justify-between items-center bg-white/5 p-5 shadow-xl w-full">
            {/* Logo e CNPJ */}
            <div className="flex flex-col items-center justify-center md:w-auto w-full">
                <img
                    src="/images/Sorocaba%20-%20São%20Conrado%20SP.png"
                    alt="Logo Bigfort"
                    width={200}
                    height={80}
                    className="max-w-full flex-shrink-0"
                />
            </div>


            <ListaDeConvenios visibilidadeDispositivo="hidden md:flex"/>


        </div>
    );
}
