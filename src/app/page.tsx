"use client"

import { Bolhas } from "@/components/organisms/Bolhas";
import { NavBar } from "@/components/organisms/Navbar";
import { CartaoVisita } from "@/components/templates/CartaoVisita";

export default function Home() {
  return (
    <>
      <NavBar /> {/* A NavBar continua ocupando 100% da largura */}

      <div className="flex h-screen"> {/* Centraliza o CartaoVisita */}
        <CartaoVisita />
      </div>

      <Bolhas />
    </>
  );
}
