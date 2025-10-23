'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-3 px-4 mt-auto border-t border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-center md:text-left">
        
        {/* Logo UFPel */}
        <Image
          src="/assets/ufpel.png" 
          alt="Logo UFPel"
          width={70}
          height={70}
          className="h-auto"
        />

        {/* Linha vertical entre logo e texto */}
        <div className="hidden md:block h-16 border-l border-gray-400 mx-3"></div>

        {/* Texto e ícones */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="leading-tight">
            <p className="text-lg font-semibold text-gray-900">
              Portal Barbaridade:
            </p>
            <p className="text-base font-medium text-gray-800 italic">
              "A ditadura no Rio Grande do Sul"
            </p>
          </div>

          {/* Ícones */}
          <div className="flex items-center justify-center md:justify-start gap-4 mt-1">
            <Link 
              href="https://github.com/alcaldeguima/projeto-barbaridade" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </Link>
            
            <Link 
              href="mailto:123@gmail.com" // substitui pelo email real
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </Link>
            
            <Link 
              href="https://www.instagram.com/portalbarbaridade" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5 hover:text-gray-600 transition-colors" />
            </Link>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            © {currentYear} Universidade Federal de Pelotas
          </p>
        </div>
      </div>
    </footer>
  );
}
