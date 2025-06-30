"use client"; // Mantemos pois o Link do Next.js precisa dele no App Router

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
          <Link href="/temas" className={styles.link}>
            Temas
          </Link>

          {/* ----- A estrutura do Dropdown permanece, mas sem os eventos de mouse ----- */}
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
