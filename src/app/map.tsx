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
    [-34.5, -56.5], // Oeste mais restrito (número menos negativo)
    [-26.5, -49.5] // Leste mantido
];
const MapaRS: React.FC = () => {
  const initialPosition: L.LatLngExpression = [-30.5, -53.5]; 
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
    // Pequeno delay para a transição CSS começar
    const resizeTimer = setTimeout(() => {
      map.invalidateSize({ animate: true }); // Redimensiona

      // Se um ponto foi selecionado (painel abriu), desliza o mapa
      if (selectedPonto) {
        // Calcula o deslocamento horizontal necessário (aprox. 20% da largura da tela, pois o painel ocupa 40%)
        const mapWidth = map.getSize().x;
        const offsetPixels = mapWidth * 0.20; 

        // Converte pixels para unidades de mapa (LatLng) no nível de zoom atual
        const currentCenterPoint = map.project(selectedPonto.position, map.getZoom());
        const targetPoint = currentCenterPoint.subtract([offsetPixels, 0]); // Desloca para a esquerda (subtrai no eixo X)
        const targetLatLng = map.unproject(targetPoint, map.getZoom());

        map.panTo(targetLatLng, { animate: true, duration: 0.4 }); // Desliza suavemente
      } 
      else {
        map.panTo(initialPosition, { animate: true, duration: 0.4 });
      }

    }, 150); // Aumentei um pouco o delay para garantir

    // Limpa o timer se o componente desmontar ou o estado mudar antes
    return () => clearTimeout(resizeTimer);
  }
}, [selectedPonto]); // A dependência continua sendo selectedPonto

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
          center={initialPosition} // Usa a posição inicial centralizada
          zoom={7}
          style={{ height: '100%', width: '100%' }}
          maxBounds={bounds} // Usa os novos limites mais amplos
          minZoom={6} // Permite um pouco mais de zoom out
          maxBoundsViscosity={0.9} // Permite um leve "elástico" nos limites
          ref={mapRef}
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

        {/* Botão e painel de filtro */}
        {!isFilterOpen && ( /* Renderiza o botão apenas se o painel de filtro NÃO estiver aberto */
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