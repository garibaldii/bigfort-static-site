'use client';

import { useEffect } from "react";

// Posições fixas para as bolhas
const fixedPositions = [
  { left: '20%', top: '50%' },  // Exemplo: porcentagem para uma posição mais responsiva
  { left: '0%', top: '20%' },  
  { left: '0%', top: '70%' }, 
  { left: '30%', top: '50%' },
  { left: '70%', top: '40%' },
  { left: '50%', top: '10%' },
  { left: '70%', top: '70%' },
];


// Função para gerar forma aleatória das bolhas
const generateRandomShape = () => {
  return Math.random() > 0.5 ? 'ellipse' : 'circle'; // Forma aleatória
};

export const Bolhas = () => {
  useEffect(() => {
    const bubblesContainer = document.getElementById("bubbles-container");

    if (!bubblesContainer) return;

    // Limpar bolhas existentes antes de adicionar novas
    bubblesContainer.innerHTML = '';

    // Criar bolhas nas posições fixas
    fixedPositions.forEach(({ left, top }) => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      const size ="30%" // Tamanho em porcentagem
      const shape = generateRandomShape(); // Forma aleatória

      // Estilos das bolhas
      bubble.style.left = left;
      bubble.style.top = top;
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.borderRadius = shape === 'ellipse' ? '50% / 30%' : '50%';
      // Adiciona as bolhas ao container
      bubblesContainer.appendChild(bubble);
    });
  }, []);

  return <div id="bubbles-container" className="absolute inset-0 pointer-events-none"></div>;
};
