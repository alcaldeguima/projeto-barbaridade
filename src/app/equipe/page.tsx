import styles from '../Equipe.module.css';

const equipe = [
  { nome: "Alessandra Gasparotto", area: "História/UFPel" },
  { nome: "Caroline Silveira Bauer", area: "História/UFRGS" },
  { nome: "Carlos Artur Gallo", area: "Ciência Política/UFPel" },
  { nome: "Darlan de Mamann Marchi", area: "História/UFPel" },
  { nome: "Darlise Gonçalves de Gonçalves", area: "História/UFPel" },
  { nome: "Guilherme Ribeiro Corrêa", area: "Centro de Desenvolvimento Tecnológico/UFPel" },
  { nome: "Joao Pedro Alcalde Guimaraes", area: "Ciência da Computação/UFPel" },
  { nome: "Kevin Castro Weitgenant", area: "Engenharia de Computação/UFPel" },
  { nome: "Maria Eduarda Nebel Carmona", area: "Engenharia de Computação/UFPel" },
];

export default function EquipePage() {
  return (
    <div className={styles.container}>
      <h1>Nossa Equipe</h1>
      <p className={styles.subtitulo}>Conheça os pesquisadores e desenvolvedores por trás do projeto.</p>
      <div className={styles.grid}>
        {equipe.map((membro) => (
          <div key={membro.nome} className={styles.card}>
            <p className={styles.membroInfo}>
              <span className={styles.nome}>{membro.nome}</span>
              <span className={styles.area}>- {membro.area}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 