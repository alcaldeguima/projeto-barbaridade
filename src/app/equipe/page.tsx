// src/app/equipe/page.tsx
import styles from '@/styles/Equipe.module.css';

export default function EquipePage() {
  return (
    <div className={styles.container}>
      <h1>Nossa Equipe</h1>
      <p className={styles.subtitulo}>
        Conheça os pesquisadores, professores e estudantes que contribuíram para este projeto
      </p>

      {/* DOCENTES */}
      <h2 className={styles.sectionTitle}>Docentes</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Alessandra Gasparotto</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Bruno Rotta Almeida</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Carlos Artur Gallo</span>
            <span className={styles.area}>Ciência Política - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Caroline Silveira Bauer</span>
            <span className={styles.area}>História - UFRGS</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Cláudia Turra Magni</span>
            <span className={styles.area}>Antropologia - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Daniele Borges Bezerra</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Darlan de Mamann Marchi</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Guilherme Ribeiro Corrêa</span>
            <span className={styles.area}>Centro de Desenvolvimento Tecnológico - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Larissa Patron Cahves Spieker</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Tatiana Lebedeff</span>
            <span className={styles.area}>Educação - UFPel</span>
          </p>
        </div>
      </div>
      <br></br>
      {/* DISCENTES */}
      <h2 className={styles.sectionTitle}>Discentes</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Ana Clara Ribeiro da Silva</span>
            <span className={styles.area}>História - Licenciatura</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Anne Machado Nunes de Cristo</span>
            <span className={styles.area}>História - Licenciatura</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Arthur Ferreira dos Santos</span>
            <span className={styles.area}>Ciência da Computação - Bacharelado</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Camila Rocha da Cruz</span>
            <span className={styles.area}>Ciências Sociais - Licenciatura</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Darlise Gonçalves de Gonçalves</span>
            <span className={styles.area}>PPG História - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Eloá Ferreira dos Santos</span>
            <span className={styles.area}>História - Licenciatura</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Gabriel Almeida da Silva</span>
            <span className={styles.area}>Ciência da Computação - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>João Pedro Alcalde Guimarães</span>
            <span className={styles.area}>Ciência da Computação - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Kevin Castro Weitgenant</span>
            <span className={styles.area}>Engenharia de Computação - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Lemoel da Silva Costa</span>
            <span className={styles.area}>Ciência da Computação - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Lúcio Gularte Tavares</span>
            <span className={styles.area}>Ciência da Computação - Bacharelado</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Maria Eduarda Nebel Carmona</span>
            <span className={styles.area}>Engenharia de Computação - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Sibele Valadão Rossales</span>
            <span className={styles.area}>PPGCPOL - UFPel</span>
          </p>
        </div>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Yuri Nunes</span>
            <span className={styles.area}>Ciência da Computação - UFPel</span>
          </p>
        </div>
      </div>
    </div>
  );
}