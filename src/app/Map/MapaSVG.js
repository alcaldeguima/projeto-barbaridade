import React from 'react';

const MapaSVG = ({ onMunicipioClick }) => {
  // Função de clique para os paths
  const handleClick = (e) => {
    onMunicipioClick(e.target.id);
  };

  return (
    <svg /* TODO: inserir atributos do SVG original aqui */>
      {/* TODO: inserir os <path> do SVG aqui, incluindo o de Porto Alegre com id="porto-alegre" e onClick={handleClick} */}
    </svg>
  );
};

export default MapaSVG; 