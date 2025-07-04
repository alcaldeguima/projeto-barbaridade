// src/app/sobre/page.tsx

// Importaremos um estilo genérico para páginas de texto.
import styles from '@/styles/PaginaTexto.module.css'; 

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sobre o Projeto</h1>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>
          O Portal Educativo 'Barbaridade: A ditadura no Rio Grande do Sul' é uma plataforma interativa que conta com verbetes sobre histórias e memórias da ditadura em diferentes espaços do Rio Grande do Sul, escritos por professores/as e pesquisadores/as da área de Ciências Humanas. Trata-se de um espaço destinado à divulgação do conhecimento histórico produzido acerca do Golpe de 1964 e da ditadura na internet, direcionado especialmente para professores/as e estudantes da Educação Básica.
        </p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>
          Além de verbetes específicos criados para a sessão 'Aconteceu aqui', que trata da história da ditadura em diferentes municípios do estado, a plataforma também disponibiliza verbetes sobre temas variados ligados ao período, linha do tempo, sugestões de materiais didáticos e outras plataformas virtuais, imagens e documentos de época.
        </p>
      </div>
    </div>
  );
} 