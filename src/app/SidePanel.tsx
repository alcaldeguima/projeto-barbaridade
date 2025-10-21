import React from 'react';
import styles from '@/styles/sidepanel.module.css';
import Image from 'next/image';
// Importa as interfaces centralizadas
import type { PontoData, ContentData, MaterialAdicionalItem, LugaresDeMemoria, EspacosDeConsulta } from '@/types/ponto';

interface SidePanelProps {
  ponto: PontoData | null;
  onClose: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ ponto, onClose }) => {
  if (!ponto) return null;
  const { name, cityState, tags, content } = ponto;

  // Verificações de segurança (mantidas como antes)
  const hasMateriaisAdicionais =
    (content?.materiaisAdicionais?.imagens?.length ?? 0) > 0 ||
    Boolean(content?.materiaisAdicionais?.video) ||
    (content?.materiaisAdicionais?.textos?.length ?? 0) > 0;
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
        {/* Adiciona tipo 'string' ao parâmetro 'tag' */}
        {tags?.map((tag: string, index: number) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
      {content?.dadosBasicos && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Dados Básicos</h4>
          {Array.isArray(content.dadosBasicos) ? (
            // Adiciona tipo 'string' ao parâmetro 'item'
            content.dadosBasicos.map((item: string, index: number) => <p key={index}>{item}</p>)
          ) : (
            <p>{content.dadosBasicos}</p>
          )}
        </div>
      )}
      {content?.verbete && content.verbete.length > 0 && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Verbete</h4>
          {/* Adiciona tipo 'string' ao parâmetro 'paragrafo' */}
          {content.verbete.map((paragrafo: string, index: number) => <p key={index}>{paragrafo}</p>)}
        </div>
      )}
      {hasLugaresDeMemoria && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Lugares de Memória</h4>
            <ul className={styles.list}>
              {/* Adiciona tipo 'LugaresDeMemoria' ao parâmetro 'lugar' */}
              {content?.lugaresDeMemoria?.map((lugar: LugaresDeMemoria, index: number) => (
                <li key={index}><strong>{lugar.nome}</strong>: {lugar.descricao}</li>
              ))}
            </ul>
          </div>
      )}
      {hasEspacosDeConsulta && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Espaços de Consulta</h4>
            <ul className={styles.list}>
              {/* Adiciona tipo 'EspacosDeConsulta' ao parâmetro 'espaco' */}
              {content?.espacosDeConsulta?.map((espaco: EspacosDeConsulta, index: number) => (
                <li key={index}>
                  {espaco.url ? (<a href={espaco.url} target="_blank" rel="noopener noreferrer">{espaco.nome}</a>) : (espaco.nome)}
                </li>
              ))}
            </ul>
          </div>
      )}
      {hasMateriaisAdicionais && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Materiais Adicionais</h4>
          {content?.materiaisAdicionais?.video?.url && (
            <div className={styles.videoWrapper}>
              <iframe src={content.materiaisAdicionais.video.url} width="100%" height="315" title={content.materiaisAdicionais.video.descricao || "Vídeo Adicional"} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              {content.materiaisAdicionais.video.descricao && <p className={styles.caption}>{content.materiaisAdicionais.video.descricao}</p>}
            </div>
          )}
          <div className={styles.images}>
            {/* Adiciona tipo 'MaterialAdicionalItem' ao parâmetro 'item' */}
            {content?.materiaisAdicionais?.imagens?.map((item: MaterialAdicionalItem, index: number) => (
              <div key={index} className={styles.imageItem}>
                <Image src={item.url || ''} alt={item.caption || `${name} - Imagem ${index + 1}`} width={500} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '4px', marginTop: '1rem' }} />
                {item.caption && <p className={styles.caption}>{item.caption}</p>}
              </div>
            ))}
          </div>
          <ul className={styles.textList}>
            {/* Adiciona tipo 'MaterialAdicionalItem' ao parâmetro 'item' */}
            {content?.materiaisAdicionais?.textos?.map((item: MaterialAdicionalItem, index: number) => (
              <li key={index}>
                {item.url ? (<a href={item.url} target="_blank" rel="noopener noreferrer">{item.nome || item.descricao || item.url}</a>) : (item.descricao)}
              </li>
            ))}
          </ul>
        </div>
      )}
      {hasReferencias && (
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Referências</h4>
          <ul className={styles.list}>
            {/* Adiciona tipo 'string' ao parâmetro 'ref' */}
            {content?.referencias?.map((ref: string, index: number) => (<li key={index}>{ref}</li>))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidePanel;