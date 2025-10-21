import React from 'react';
import styles from '@/styles/sidepanel.module.css'; 
import Image from 'next/image'; 

// 1. Interface atualizada para 'pontos.json'
// Tornando 'content' e suas sub-propriedades opcionais
interface PontoData {
  id: string;
  name: string;
  cityState: string;
  tags: string[];
  position: [number, number];
  content?: { // 'content' agora é opcional
    text?: string;
    images?: string[];
    materiaisAdicionais?: { // 'materiaisAdicionais' é opcional
      video?: string;
      imagens?: string[];
      textos?: string[];
    };
  };
}

// 2. Interface para as props do componente
interface SidePanelProps {
  ponto: PontoData | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ ponto, onClose }) => {
  if (!ponto) return null;

  // 3. Desestruturação dos dados
  const { name, cityState, tags, content } = ponto;

  // 4. Verificação de segurança para a linha que estava a falhar
  // Usamos "optional chaining" (?.) para aceder com segurança
  const hasMateriaisAdicionais = 
    (content?.materiaisAdicionais?.imagens?.length ?? 0) > 0 ||
    Boolean(content?.materiaisAdicionais?.video) ||
    (content?.materiaisAdicionais?.textos?.length ?? 0) > 0;

  return (
    <div className={styles.sidePanel}>
      <button onClick={onClose} className={styles.closeButton}>
        &times;
      </button>
      
      <h2>{name}</h2> 
      <p className={styles.cityState}>{cityState}</p>
      
      <div className={styles.tags}>
        {tags && tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      
      {/* Verifica se 'content' existe antes de tentar aceder a 'content.text' */}
      {content?.text && <p>{content.text}</p>}
      
      {/* Verifica 'content.images' */}
      <div className={styles.images}>
        {content?.images && content.images.map((img, index) => (
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

      {/* 5. Renderiza a secção de materiais adicionais usando a nossa variável segura */}
      {hasMateriaisAdicionais && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Materiais Adicionais</h4>
          
          {content?.materiaisAdicionais?.video && (
            <div className={styles.videoWrapper}>
              <iframe
                src={content.materiaisAdicionais.video}
                width="100%"
                height="315"
                title="Vídeo Adicional"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          
          <div className={styles.images}>
            {content?.materiaisAdicionais?.imagens && content.materiaisAdicionais.imagens.map((img, index) => (
              <Image 
                key={index} 
                src={img} 
                alt={`${name} - Material Adicional ${index + 1}`} 
                width={500} 
                height={300}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', marginTop: '1rem' }}
              />
            ))}
          </div>
          
          <ul className={styles.textList}>
            {content?.materiaisAdicionais?.textos && content.materiaisAdicionais.textos.map((texto, index) => (
              <li key={index}>
                {typeof texto === 'string' && texto.startsWith('http') ? (
                  <a href={texto} target="_blank" rel="noopener noreferrer">{texto}</a>
                ) : (
                  texto
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidePanel;