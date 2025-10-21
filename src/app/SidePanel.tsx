import React from 'react';
import styles from '@/styles/sidepanel.module.css'; 
import Image from 'next/image'; 

// 1. Define a interface CORRETA para os dados de 'pontos.json'
interface MaterialAdicionalItem {
  url?: string;
  descricao?: string;
  caption?: string;
  nome?: string;
}

interface LugaresDeMemoria {
  nome: string;
  descricao: string;
}

interface EspacosDeConsulta {
  nome: string;
  url: string;
}

interface ContentData {
  dadosBasicos?: string | string[]; // Pode ser string ou array de strings
  verbete?: string[];
  lugaresDeMemoria?: LugaresDeMemoria[];
  espacosDeConsulta?: EspacosDeConsulta[];
  materiaisAdicionais?: {
    video?: { url: string; descricao: string };
    imagens?: MaterialAdicionalItem[];
    textos?: MaterialAdicionalItem[];
  };
  referencias?: string[];
}

interface PontoData {
  id: string;
  name: string;
  cityState: string;
  tags: string[];
  content?: ContentData; // 'content' é opcional e usa a nova interface ContentData
  position: [number, number];
}

// 2. Interface para as props do componente
interface SidePanelProps {
  ponto: PontoData | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ ponto, onClose }) => {
  if (!ponto) return null;

  // 3. Desestrutura os dados com base na estrutura CORRETA do pontos.json
  const { name, cityState, tags, content } = ponto;

  // Verificações de segurança para materiais adicionais
  const hasMateriaisAdicionais = 
    (content?.materiaisAdicionais?.imagens?.length ?? 0) > 0 ||
    Boolean(content?.materiaisAdicionais?.video) ||
    (content?.materiaisAdicionais?.textos?.length ?? 0) > 0;

  // Verificações de segurança para outras seções
  const hasLugaresDeMemoria = (content?.lugaresDeMemoria?.length ?? 0) > 0;
  const hasEspacosDeConsulta = (content?.espacosDeConsulta?.length ?? 0) > 0;
  const hasReferencias = (content?.referencias?.length ?? 0) > 0;

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
      
      {/* Dados Básicos */}
      {content?.dadosBasicos && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Dados Básicos</h4>
          {Array.isArray(content.dadosBasicos) ? (
            content.dadosBasicos.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content.dadosBasicos}</p>
          )}
        </div>
      )}

      {/* Verbete */}
      {content?.verbete && content.verbete.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Verbete</h4>
          {content.verbete.map((paragrafo, index) => <p key={index}>{paragrafo}</p>)}
        </div>
      )}

      {/* Lugares de Memória */}
      {hasLugaresDeMemoria && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Lugares de Memória</h4>
          <ul className={styles.list}>
            {content?.lugaresDeMemoria?.map((lugar, index) => (
              <li key={index}>
                <strong>{lugar.nome}</strong>: {lugar.descricao}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Espaços de Consulta */}
      {hasEspacosDeConsulta && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Espaços de Consulta</h4>
          <ul className={styles.list}>
            {content?.espacosDeConsulta?.map((espaco, index) => (
              <li key={index}>
                {espaco.url ? (
                  <a href={espaco.url} target="_blank" rel="noopener noreferrer">{espaco.nome}</a>
                ) : (
                  espaco.nome
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Materiais Adicionais */}
      {hasMateriaisAdicionais && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Materiais Adicionais</h4>
          
          {content?.materiaisAdicionais?.video && (
            <div className={styles.videoWrapper}>
              <iframe
                src={content.materiaisAdicionais.video.url}
                width="100%"
                height="315"
                title={content.materiaisAdicionais.video.descricao || "Vídeo Adicional"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {content.materiaisAdicionais.video.descricao && (
                <p className={styles.caption}>{content.materiaisAdicionais.video.descricao}</p>
              )}
            </div>
          )}
          
          <div className={styles.images}>
            {content?.materiaisAdicionais?.imagens && content.materiaisAdicionais.imagens.map((item, index) => (
              <div key={index} className={styles.imageItem}>
                <Image 
                  src={item.url || ''} // Usar item.url
                  alt={item.caption || `${name} - Imagem ${index + 1}`} 
                  width={500} 
                  height={300}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', marginTop: '1rem' }}
                />
                {item.caption && <p className={styles.caption}>{item.caption}</p>}
              </div>
            ))}
          </div>
          
          <ul className={styles.textList}>
            {content?.materiaisAdicionais?.textos && content.materiaisAdicionais.textos.map((item, index) => (
              <li key={index}>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer">{item.nome || item.descricao || item.url}</a>
                ) : (
                  item.descricao
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Referências */}
      {hasReferencias && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Referências</h4>
          <ul className={styles.list}>
            {content?.referencias?.map((ref, index) => (
              <li key={index}>{ref}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidePanel;