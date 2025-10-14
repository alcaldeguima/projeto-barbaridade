import React from 'react';
import styles from '../styles/sidepanel.module.css'; 

const SidePanel = ({ ponto, onClose }) => {
  if (!ponto) return null;

  const { name, cityState, tags, content } = ponto;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>

        <div className={styles.content}>
          <h3 className={styles.title}>{name}</h3>
          {/* ... outras seções ... */}
          {cityState && <div className={styles.location}>{cityState}</div>}
          {tags && tags.length > 0 && (
            <div className={styles.tagsContainer}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}

          {/* Conteúdo rico (novo formato) */}
          {content && (
            <>
              {/* ... seções de Dados Básicos, Verbete, Lugares de Memória ... */}
              {content.dadosBasicos && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Dados Básicos</h4>
                  <p>{content.dadosBasicos}</p>
                </div>
              )}
              {content.verbete && content.verbete.length > 0 && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Verbete</h4>
                  {content.verbete.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}
              {content.lugaresDeMemoria && content.lugaresDeMemoria.length > 0 && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Lugares de Memória</h4>
                  <div className={styles.memoryPlacesContainer}>
                    {content.lugaresDeMemoria.map((lugar, index) => (
                      <div key={index} className={styles.memoryPlace}>
                        <h5 className={styles.memoryPlaceName}>{lugar.nome}</h5>
                        <p>{lugar.descricao}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Materiais adicionais */}
              { (content.materiaisAdicionais?.imagens?.length > 0 || content.materiaisAdicionais?.video || content.materiaisAdicionais?.textos?.length > 0) &&
                <div className={styles.section}>
                    <h4 className={styles.sectionTitle}>Materiais Adicionais</h4>

                    {/* Textos */}
                    {content.materiaisAdicionais?.textos?.length > 0 && (
                      <div className={styles.textMaterialContainer}>
                        {content.materiaisAdicionais.textos.map((texto, index) => (
                          <div key={index} className={styles.textMaterial}>
                            <p>{texto.descricao}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Galeria de Imagens */}
                    {content.materiaisAdicionais?.imagens?.length > 0 && (
                        <div className={styles.imageGallery}>
                            {content.materiaisAdicionais.imagens.map((img, index) => (
                                <figure key={index} className={styles.imageContainer}>
                                    <img src={img.url} alt={img.caption} />
                                    <figcaption>{img.caption}</figcaption>
                                </figure>
                            ))}
                        </div>
                    )}

                    {/* Vídeo */}
                    {content.materiaisAdicionais?.video && (
                        <div className={styles.videoSection}>
                            <div className={styles.videoContainer}>
                                <iframe
                                    src={content.materiaisAdicionais.video.url}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                                </iframe>
                            </div>
                            <p>{content.materiaisAdicionais.video.descricao}</p>
                        </div>
                    )}
                </div>
              }

              {/* ... seções de Espaços de Consulta e Referências ... */}
              {content.espacosDeConsulta?.length > 0 && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Espaços de Consulta</h4>
                  <ul className={styles.consultationList}> 
                    {content.espacosDeConsulta.map((espaco, index) => (
                      <li key={index}>
                        {espaco.url ? (
                          <a href={espaco.url} target="_blank" rel="noopener noreferrer">
                            {espaco.nome}
                          </a>
                        ) : (
                          <span>{espaco.nome}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {content.referencias && content.referencias.length > 0 && (
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Referências</h4>
                  <ol className={styles.referencesList}>
                    {content.referencias.map((ref, index) => (
                      <li key={index}>{ref}</li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;