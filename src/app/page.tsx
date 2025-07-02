// src/app/page.tsx
"use client";

import React from 'react';
import MapaRS from './map';

export default function Home() {
  // A página agora só tem uma responsabilidade: renderizar o mapa.
  return (
    <MapaRS />
  );
}