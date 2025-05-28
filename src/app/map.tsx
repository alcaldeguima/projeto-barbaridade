"use client";

import React, { useState } from "react";
import { pathMap } from "../app/constants/pathMap";
import Modal from "./modal";
import Municipio2ModalContent from "./municipio2ModalContent";
import Municipio1ModalContent from "./municipio1ModalContent";

function MapaRS() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);
  const [tooltipVisible3, setTooltipVisible3] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);


  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const handleMouseEnter2 = () => setTooltipVisible2(true);
  const handleMouseLeave2 = () => setTooltipVisible2(false);

  const handleMouseEnter3 = () => setTooltipVisible3(true);
  const handleMouseLeave3 = () => setTooltipVisible3(false);

  const handleMouseMove = (event: React.MouseEvent) => {
    setTooltipPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div className="flex flex-col h-[95%] light-gradient pt-5">
      <div
        id="mapaContainer"
        className="w-[95%] h-[95%] flex items-center animate-fade-in
              animate-fade-out  
              animate-duration-1000 
              animate-delay-800
              animate-ease-in-out"
      >
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
            d={pathMap.RS}
          />
          <path
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            onMouseMove={handleMouseMove}
            className={`stroke-[--yellow]
                        stroke-1
                        ${modalOpen ? "fill-[--yellow]" : "fill-transparent"}
                        animate-pulse
                        cursor-pointer
                        hover:fill-[--yellow]
                        hover:animate-none
                        transition-colors 
                        duration-300 
                        ease-in-out`}
            id="municipios-1"
            onClick={() => setModalOpen(true)}
            d={pathMap.MUNICIPIO1}
          />
          <path
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            onMouseMove={handleMouseMove}
            className={`stroke-[--red]
                        stroke-1
                        ${modalOpen2 ? "fill-[--red]" : "fill-transparent"}
                        animate-pulse
                        cursor-pointer
                        hover:fill-[--red]
                        hover:animate-none
                        transition-colors 
                        duration-300 
                        ease-in-out`}
            id="municipios-2"
            onClick={() => setModalOpen2(true)}
            d={pathMap.MUNICIPIO2}
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
            className="absolute px-2 py-1 bg-gray-800 text-white text-sm rounded cursor-pointer transition-opacity duration-200"
            style={{
              top: tooltipPosition.y + 10,
              left: tooltipPosition.x + 10,
            }}
          >
            Município 1
          </div>
        )}
        {tooltipVisible3 && (
          <div
            className="absolute px-2 py-1 bg-gray-800 text-white text-sm rounded cursor-pointer transition-opacity duration-200"
            style={{
              top: tooltipPosition.y + 10,
              left: tooltipPosition.x + 10,
            }}
          >
            Município 2
          </div>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} justify="end">
        <Municipio1ModalContent />
      </Modal>
      <Modal isOpen={modalOpen2} onClose={() => setModalOpen2(false)} justify="start">
        <Municipio2ModalContent />
      </Modal>
    </div>
  );
}
export default MapaRS;
