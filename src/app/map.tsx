// MapaRS.js

"use client";

import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import SidePanel from './SidePanel'; 
import pontosDeInteresse from '../../content/pontos/pontos.json';
import styles from '../styles/map.module.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
});

const bounds = [
  [-33.7511, -57.6462],
  [-27.1302, -49.6919]
];

const MapaRS = () => {
  const initialPosition = [-30.0346, -51.2177];

  // Estado para o painel lateral
  const [selectedPonto, setSelectedPonto] = useState(null);

  // Estados e lógicas de filtro
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    pontosDeInteresse.forEach(ponto => {
      ponto.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  const handleFilterChange = (tag: string) => {
    setSelectedTags(prevTags => {
      if (prevTags.includes(tag)) {
        return prevTags.filter(t => t !== tag);
      }
      return [...prevTags, tag];
    });
  };

  const filteredPontos = useMemo(() => {
    if (selectedTags.length === 0) {
      return pontosDeInteresse;
    }
    return pontosDeInteresse.filter(ponto =>
      ponto.tags.some(tag => selectedTags.includes(tag))
    );
  }, [selectedTags]);

  // Função para lidar com o clique em um marcador
  const handleMarkerClick = (ponto) => {
    setSelectedPonto(ponto);
  };

  // Função para fechar o painel
  const handleClosePanel = () => {
    setSelectedPonto(null);
  };
  
  // Componente para fechar o painel ao clicar no mapa
  const MapClickHandler = () => {
    useMapEvents({
      click: () => {
        handleClosePanel();
      },
    });
    return null;
  };

  return (
    <div className={styles.mapWrapper} style={{ position: 'relative' }}>
      <MapContainer 
        center={initialPosition} 
        zoom={7} 
        style={{ height: '100%', width: '100%' }}
        maxBounds={bounds}
        minZoom={7}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <MapClickHandler />

        {filteredPontos.map(ponto => (
          <Marker 
            key={ponto.id} 
            position={[ponto.position[0], ponto.position[1]]}
            eventHandlers={{
              click: () => handleMarkerClick(ponto),
            }}
          />
        ))}
      </MapContainer>

      {/* painel e botão de filtro */}
      {!isFilterOpen && (
        <button className={styles.filterButton} onClick={() => setIsFilterOpen(true)}>
          FILTRO
        </button>
      )}
      {isFilterOpen && (
        <div className={styles.filterPanel}>
          <div className={styles.filterHeader}>
            <h2>Filtros</h2>
            <button onClick={() => setIsFilterOpen(false)} className={styles.closeButton}>
              &times;
            </button>
          </div>
          
          <p className={styles.filterSectionTitle}>Categorias</p>
          <ul className={styles.filterList}>
            {allTags.map(tag => (
              <li key={tag} className={styles.filterItem}>
                <input 
                  type="checkbox" 
                  id={tag} 
                  checked={selectedTags.includes(tag)} 
                  onChange={() => handleFilterChange(tag)} 
                />
                <label htmlFor={tag}>{tag}</label>
              </li>
            ))}
          </ul>
        </div>
      )}


      {/* Renderização do painel lateral */}
      {selectedPonto && (
        <SidePanel 
          ponto={selectedPonto} 
          onClose={handleClosePanel} 
        />
      )}
    </div>
  );
};

export default MapaRS;