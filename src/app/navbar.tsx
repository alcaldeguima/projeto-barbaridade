"use client";

import Link from 'next/link';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Barbaridade!
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>
            Mapa Interativo
          </Link>

         
          <Link href="/timeline" className={styles.link}>
            Linha do Tempo
          </Link>

          {/* <Link href="/temas" className={styles.link}>
            Temas
          </Link> */}

          

          <div className={styles.dropdown}>
            <button className={styles.link}>
              Sobre o Projeto ▼
            </button>
            
            <div className={styles.dropdownMenu}>
              <Link href="/sobre" className={styles.dropdownLink}>
                Sobre Nós
              </Link>
              <Link href="/equipe" className={styles.dropdownLink}>
                Equipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
