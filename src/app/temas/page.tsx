import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '@/styles/navbar.module.css';

interface Tema {
  titulo: string;
  data: string;
  autor: string;
  resumo: string;
  imagemCapa: string;
  slug: string;
}

async function getTemas(): Promise<Tema[]> {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  const temas = filenames.map((filename) => {
    const filePath = path.join(temasDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return data as Tema;
  });

  return temas;
}

export default async function TemasPage() {
  const temas = await getTemas();
  
  // Ordena os temas pela data mais recente
  const temasOrdenados = temas.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return (
    
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Temas</h1>
          <p className={styles.subtitle}>
            Explore artigos, matérias e ensaios sobre a Ditadura Militar no Rio Grande do Sul e suas diversas facetas.
          </p>
        </header>
        <h1>Em breve...</h1>
      </div> 
    </div>
    
  );
}

/**import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import styles from '@/styles/navbar.module.css';

interface Tema {
  titulo: string;
  data: string;
  autor: string;
  resumo: string;
  imagemCapa: string;
  slug: string;
}

async function getTemas(): Promise<Tema[]> {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  const temas = filenames.map((filename) => {
    const filePath = path.join(temasDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return data as Tema;
  });

  return temas;
}

export default async function TemasPage() {
  const temas = await getTemas();
  
  // Ordena os temas pela data mais recente
  const temasOrdenados = temas.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());

  return (
    
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>Temas</h1>
          <p className={styles.subtitle}>
            Explore artigos, matérias e ensaios sobre a Ditadura Militar no Rio Grande do Sul e suas diversas facetas.
          </p>
        </header>
        
        <main className={styles.grid}>
          {temasOrdenados.map((tema) => (
            <Link 
              key={tema.slug} 
              href={`/temas/${tema.slug}`} 
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>
                  {tema.titulo}
                </h2>
                <p className={styles.cardResumo}>
                  {tema.resumo}
                </p>
                <div className={styles.cardMeta}>
                  <span>Por {tema.autor}</span>
                  <span>
                    {new Date(tema.data).toLocaleDateString('pt-BR', { 
                      day: '2-digit', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div> 
    </div>
    
  );
} */