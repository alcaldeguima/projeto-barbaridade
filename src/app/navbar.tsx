"use client";

import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        {/* Logo como link para a página inicial */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/assets/logoMenor.jpg" // atualizado para o novo nome
            alt="Logo Projeto Barbaridade"
            width={220}
            height={40}
            priority
            style={{ height: 'auto' }}
          />
        </Link>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.link}>
            Aconteceu Aqui
          </Link>
          <Link href="/timeline" className={styles.link}>
            Linha do Tempo
          </Link>
           <Link href="/temas" className={styles.link}>
            Temas
          </Link> 
          <div className={styles.dropdown}>
            <button className={styles.link} style={{ cursor: 'pointer' }}>
              Sobre o Projeto <span style={{ fontSize: '0.8rem' }}>▼</span>
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
