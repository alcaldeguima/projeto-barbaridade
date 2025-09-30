import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import styles from '@/styles/Artigo.module.css'; // Usando o atalho de caminho "@" que é mais robusto

// 1. Esta função gera a lista de todas as páginas de temas que devem ser criadas
export async function generateStaticParams() {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// 2. Esta é uma função auxiliar para buscar o conteúdo de um post específico pelo slug
function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'temas', `${slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return { frontmatter, content };
}

// 3. Este é o componente da página. Ele recebe o "slug" pelos parâmetros e busca seus próprios dados.
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

// 4. (Bônus) Esta função gera os metadados (ex: título da aba do navegador) para cada página
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getPostBySlug(params.slug);
  return {
    title: `${frontmatter.titulo} | Projeto Barbaridade`,
    description: frontmatter.resumo,
  };
}