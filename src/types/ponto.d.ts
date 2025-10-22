// Define a interface para itens dentro de materiaisAdicionais
export interface MaterialAdicionalItem {
  url?: string;
  descricao?: string;
  caption?: string;
  nome?: string;
}

// Define a interface para lugaresDeMemoria
export interface LugaresDeMemoria {
  nome: string;
  descricao: string;
}

// Define a interface para espacosDeConsulta
export interface EspacosDeConsulta {
  nome: string;
  url: string;
}

// Define a interface para o objeto 'content'
export interface ContentData {
  dadosBasicos?: string | string[];
  verbete?: string[];
  lugaresDeMemoria?: LugaresDeMemoria[];
  espacosDeConsulta?: EspacosDeConsulta[];
  materiaisAdicionais?: {
    video?: { url: string; descricao: string };
    imagens?: MaterialAdicionalItem[];
    textos?: MaterialAdicionalItem[];
  };
  referencias?: string[];
  outrasFontes?: { titulo: string; itens: string[] };
}

// Define a interface principal 'PontoData'
export interface PontoData {
  id: number;
  name: string;
  cityState: string;
  tags: string[];
  position: [number, number]; 
  content?: any;
}