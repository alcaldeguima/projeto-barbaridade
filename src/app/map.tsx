"use client";

import React, { useState } from "react";
import { pathMap} from '../app/constants/pathMap';

function MapaRS() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const handleMouseEnter2 = () => setTooltipVisible2(true);
  const handleMouseLeave2 = () => setTooltipVisible2(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="flex flex-col h-[95%] light-gradient pt-5">
      <div id="mapaContainer" className="w-[95%] h-[95%] flex items-center animate-fade-in
              animate-fade-out  
              animate-duration-1000 
              animate-delay-800
              animate-ease-in-out">
        {/* Para poder usar classes no svg é preciso chamar ele assim e usar os paths para criar os pontos*/}

        <svg
          version="1.1"
          id="mapa-rs"
          viewBox="0 0 592.21741 496.62635"
          xmlns="http://www.w3.org/2000/svg"
          className="object-contain w-full h-full"
        >
          <path
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            className="fill-[--dark-green] 
            cursor-pointer"
            id="outline-rs"
            d= {pathMap.RS}
          />
          <path
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onMouseMove={handleMouseMove}
            className="stroke-[--yellow]
              stroke-1
              fill-transparent
              animate-pulse
              cursor-pointer
              hover:fill-[--yellow]
              hover:animate-none
              transition-colors 
              duration-300 
              ease-in-out"
            id="municipios-1"
            d={pathMap.MUNICIPIO}
          />
        </svg>
        {tooltipVisible && (
          <div
            className="absolute px-2 py-1 bg-gray-800 text-white text-sm rounded pointer-events-none transition-opacity duration-200"
            style={{
              top: tooltipPosition.y + 10, // Offset from mouse
              left: tooltipPosition.x + 10,
            }}
          >
            Clique em um município!
          </div>
        )}
        {tooltipVisible2 && (
          <div
            className="absolute px-2 py-1 bg-gray-800 text-white text-sm rounded pointer-events-none transition-opacity duration-200"
            style={{
              top: tooltipPosition.y + 10, // Offset from mouse
              left: tooltipPosition.x + 10,
            }}
          >
            Município 2
          </div>
        )}
      </div>
    </div>
  );
}
export default MapaRS;
