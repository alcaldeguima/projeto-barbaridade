import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from '../../styles/Artigo.module.css'; // Corrigido o caminho do CSS

// Esta função lê todos os artigos e diz ao Next.js quais páginas construir
export async function generateStaticParams() {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// Esta função busca o conteúdo de UM artigo específico
function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'temas', `${slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { frontmatter, content };
}

// Este é o componente da página, agora usando o padrão correto
export default function PostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getPostBySlug(params.slug);

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>{frontmatter.titulo}</h1>
        <p>
          Por {frontmatter.autor} | {new Date(frontmatter.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
      </header>
      <div className={styles.content}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

// Opcional: Adicionar metadados dinâmicos para cada página
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getPostBySlug(params.slug);
  return {
    title: `${frontmatter.titulo} | Projeto Barbaridade`,
    description: frontmatter.resumo,
  };
} 