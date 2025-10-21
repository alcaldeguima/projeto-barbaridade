// src/app/page.tsx
"use client"; // Mantém a diretiva client

import React from 'react';
import dynamic from 'next/dynamic'; // 1. Importa a função 'dynamic'

// 2. Carrega o componente do mapa dinamicamente, desativando a renderização no servidor (ssr: false)
const MapaRS = dynamic(() => import('./map'), { 
  ssr: false,
  loading: () => <p style={{ textAlign: 'center', marginTop: '2rem' }}>A carregar mapa...</p> // Opcional: Mostra uma mensagem enquanto carrega
});

export default function Home() {
  return (
    <MapaRS />
  );
}