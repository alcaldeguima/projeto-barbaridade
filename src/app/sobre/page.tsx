// src/app/sobre/page.tsx

import styles from '@/styles/PaginaTexto.module.css'; 

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Sobre o Projeto</h1>
   
        <p>
          O Portal Educativo 'Barbaridade: A ditadura no Rio Grande do Sul' é uma plataforma interativa que conta com verbetes sobre histórias e memórias da ditadura em diferentes espaços do Rio Grande do Sul, escritos por professores/as e pesquisadores/as da área de Ciências Humanas. Trata-se de um espaço destinado à divulgação do conhecimento histórico produzido acerca do Golpe de 1964 e da ditadura na internet, direcionado especialmente para professores/as e estudantes da Educação Básica.
        </p>
   
        <p>
          Além de verbetes específicos criados para a sessão 'Aconteceu aqui', que trata da história da ditadura em diferentes municípios do estado, a plataforma também disponibiliza verbetes sobre temas variados ligados ao período, linha do tempo, sugestões de materiais didáticos e outras plataformas virtuais, imagens e documentos de época.
        </p>
        <p>
          O projeto é executado no Programa de Pós-Graduação em História (PPGH) da Universidade Federal de Pelotas (UFPel) e conta com uma equipe interdisciplinar formada por pesquisadores/as das áreas de História, Ciência Política, Ciências Sociais, Antropologia, Educação e Computação. É financiado pelo Programa de Extensão da Educação Superior na Pós-Graduação (PROEXT-PG), Edital nº 2/2024, reunindo docentes e discentes de diferentes cursos da UFPel e de outras instituições parceiras.
        </p>

      </div>
    </div>
  );
} 