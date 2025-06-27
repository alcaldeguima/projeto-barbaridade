import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Temas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore artigos, matérias e ensaios sobre a Ditadura Militar no Rio Grande do Sul e suas diversas facetas.
          </p>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {temasOrdenados.map((tema) => (
            <Link 
              key={tema.slug} 
              href={`/temas/${tema.slug}`} 
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {tema.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {tema.resumo}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
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
} 