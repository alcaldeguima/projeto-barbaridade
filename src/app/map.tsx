// MapaRS.js

"use client";

import React, { useState, useMemo, useEffect, useRef } from "react"; // Adiciona useEffect e useRef
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L, { Map as LeafletMap } from 'leaflet'; // Importa o tipo 'Map' do Leaflet

import 'leaflet/dist/leaflet.css';

import SidePanel from './SidePanel';
import pontosDeInteresse from '../../content/pontos/pontos.json';
import styles from '@/styles/map.module.css';

// Importa a interface centralizada
import type { PontoData } from '@/types/ponto';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
});

// Valida que os dados importados correspondem à interface
const pontos: PontoData[] = pontosDeInteresse.map(ponto => ({
    ...ponto,
    // Garante que a position seja tratada com 2 elementos X e Y
    position: (Array.isArray(ponto.position) && ponto.position.length === 2) 
                ? [ponto.position[0], ponto.position[1]] 
                : [0, 0] // Posição defaulu
})) as PontoData[];

const bounds: L.LatLngBoundsExpression = [
  [-33.8, -56.2], 
  [-27.0, -49.8]  
];


const MapaRS: React.FC = () => {
  const initialPosition: L.LatLngExpression = [-30.5, -52.5]; 
  const [selectedPonto, setSelectedPonto] = useState<PontoData | null>(null)
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const mapRef = useRef<LeafletMap | null>(null);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    pontos.forEach((ponto) => {
      (ponto.tags || []).forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (map) {
      map.setView(initialPosition, 7, { animate: true });

        map.on('drag', () => {
       map.panInsideBounds(bounds, { animate: false });
  });
      
      const resizeTimer = setTimeout(() => {
        
      
        map.invalidateSize({ animate: true }); 

        if (selectedPonto) {
          
          map.panTo(selectedPonto.position, { animate: true, duration: 0.4 }); 
        } 
        else {
          // painel fechado, centraliza no RS
          map.panTo(initialPosition, { animate: true, duration: 0.4 });
        }

      }, 350);

    return () => clearTimeout(resizeTimer);
  }
}, [selectedPonto]); 

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
      return pontos;
    }
    return pontos.filter(ponto =>
      (ponto.tags || []).some(tag => selectedTags.includes(tag))
    );
  }, [selectedTags]);

  const handleMarkerClick = (ponto: PontoData) => {
    setSelectedPonto(ponto);
  };

  const handleClosePanel = () => {
    setSelectedPonto(null);
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: () => { handleClosePanel(); },
    });
    return null;
  };

  return (
    <div className={styles.mapWrapper} style={{ position: 'relative' }}> 
      {/* Aplica a classe condicional baseada no estado selectedPonto */}
      <div className={`${styles.mapContainer} ${selectedPonto ? styles.mapContainerShifted : ''}`}>
        <MapContainer
          center={initialPosition}
          zoom={6.7}
          style={{ height: '100%', width: '100%' }}
          maxBounds={bounds} // Usa 
          minZoom={6} //zoom out
          maxZoom={9} //zoom in
          dragging={true} //ativa o arrastar
          zoomControl={true} //ativa o zoom
          doubleClickZoom={false}
          ref={mapRef}
          zoomDelta={0.5} 
          zoomSnap={0.5}
          maxBoundsViscosity={0.9} // limita movimentação no mapa
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapClickHandler />
          {filteredPontos.map(ponto => (
            <Marker
              key={ponto.id}
              position={ponto.position}
              eventHandlers={{ click: () => handleMarkerClick(ponto) }}
            />
          ))}
        </MapContainer>

        {/*filtro */}
        {!isFilterOpen && ( /* renderiza só quando o painel dos filtros esta fechado */
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
                  <input type="checkbox" id={tag} checked={selectedTags.includes(tag)} onChange={() => handleFilterChange(tag)} />
                  <label htmlFor={tag}>{tag}</label>
                </li>
               ))}
             </ul>
          </div>
        )}
      </div> 

      {/* SidePanel */}
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