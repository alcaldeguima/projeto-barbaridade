// src/app/equipe/page.tsx
import styles from '@/styles/Equipe.module.css'; 

export default function EquipePage() {
  return (
    <div className={styles.container}>
      <h1>Nossa Equipe</h1>
      <p className={styles.subtitulo}>
        Conheça os pesquisadores e professores que contribuíram para este projeto
      </p>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Dr. João Silva</span>
            <span className={styles.area}>História - UFPel</span>
          </p>
        </div>
        
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Dra. Maria Santos</span>
            <span className={styles.area}>Ciências Sociais - UFRGS</span>
          </p>
        </div>
        
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Prof. Carlos Oliveira</span>
            <span className={styles.area}>História - UFSM</span>
          </p>
        </div>
        
        <div className={styles.card}>
          <p className={styles.membroInfo}>
            <span className={styles.nome}>Dra. Ana Costa</span>
            <span className={styles.area}>Educação - UFPel</span>
          </p>
        </div>
      </div>
    </div>
  );
}