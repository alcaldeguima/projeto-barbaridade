import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Frontmatter {
  titulo: string;
  data: string;
  autor: string;
  resumo: string;
  imagemCapa: string;
  slug: string;
}

interface Props {
  params: {
    slug: string;
  };
}

async function getTemaBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'content', 'temas', `${slug}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    frontmatter: frontmatter as Frontmatter,
    mdxSource,
  };
}

export async function generateStaticParams() {
  const temasDirectory = path.join(process.cwd(), 'content', 'temas');
  const filenames = fs.readdirSync(temasDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function TemasPost({ params }: Props) {
  const { frontmatter, mdxSource } = await getTemaBySlug(params.slug);

  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {frontmatter.titulo}
          </h1>
          <p className="text-lg text-gray-600">
            Por {frontmatter.autor} | {new Date(frontmatter.data).toLocaleDateString('pt-BR', { 
              day: '2-digit', 
              month: 'long', 
              year: 'numeric' 
            })}
          </p>
        </header>
        
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={mdxSource} />
        </div>
      </div>
    </article>
  );
} 