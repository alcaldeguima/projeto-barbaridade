// src/app/page.tsx
"use client";

import React from 'react';
import MapaRS from './map'; // Mantemos a importação do componente do mapa

export default function Home() {
  // A página principal deve apenas renderizar o componente do mapa.
  // A linha que importava '../PaginaTexto.module.css' foi removida.
  return (
    <MapaRS />
  );
}

// teste build

