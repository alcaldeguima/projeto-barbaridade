import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from '@/styles/Artigo.module.css';

// 1. Gera a lista de todas as páginas de temas que devem ser criadas
export async function generateStaticParams() {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// 2. Função auxiliar para buscar o conteúdo de um post específico pelo slug
function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'temas', `${slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { frontmatter, content };
}

// 3. O componente da página, com a estrutura correta
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

// 4. Função para gerar os metadados da página (título da aba, etc.)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getPostBySlug(params.slug);
  return {
    title: `${frontmatter.titulo} | Projeto Barbaridade`,
    description: frontmatter.resumo,
  };
}