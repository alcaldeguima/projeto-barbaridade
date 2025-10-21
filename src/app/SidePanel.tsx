import React from 'react';
import styles from '@/styles/sidepanel.module.css'; 
import Image from 'next/image'; 

// 1. Define a interface CORRETA para os dados de 'pontos.json'
interface PontoData {
  id: string;
  name: string;
  cityState: string;
  tags: string[];
  content: {
    text: string;
    images: string[];
  };
  position: [number, number];
}

// 2. Define a interface para as props do componente
interface SidePanelProps {
  ponto: PontoData | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ ponto, onClose }) => {
  if (!ponto) return null;

  // 3. Desestrutura os dados com base na estrutura correta
  const { name, cityState, tags, content } = ponto;

  return (
    <div className={styles.sidePanel}>
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
      
      {/* 4. Usa as propriedades corretas: 'name' e 'content.text' */}
      <h2>{name}</h2> 
      <p className={styles.cityState}>{cityState}</p>
      
      <div className={styles.tags}>
        {/* Adiciona verificação para 'tags' (boa prática) */}
        {tags && tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      
      {/* Adiciona verificação para 'content' (boa prática) */}
      {content && (
        <>
          <p>{content.text}</p>
          
          <div className={styles.images}>
            {/* 5. Faz o .map() no local correto: 'content.images' */}
            {content.images && content.images.map((img, index) => (
              <Image 
                key={index} 
                src={img} 
                alt={`${name} - Imagem ${index + 1}`} 
                width={500} 
                height={300}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', marginTop: '1rem' }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SidePanel;