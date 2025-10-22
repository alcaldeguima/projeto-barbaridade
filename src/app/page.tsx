// src/app/page.tsx
"use client"; 

import React from 'react';
import dynamic from 'next/dynamic'; 

// Carrega o componente do mapa dinamicamente, desativando a renderização no servidor
const MapaRS = dynamic(() => import('./map'), { 
  ssr: false,
  loading: () => <p style={{ textAlign: 'center', marginTop: '2rem' }}>A carregar mapa...</p> 
});

export default function Home() {
  return (
    <MapaRS />
  );
}