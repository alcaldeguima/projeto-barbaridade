'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-2 px-4 mt-auto border-t border-gray-300">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">

        {/* Logo UFPel */}
        <Image
          src="/assets/ufpel.png" 
          alt="Logo UFPel"
          width={80}
          height={80}
          className="h-auto"
        />

        <div className="hidden md:block h-20 border-l border-gray-400 mx-4"></div>

        <div className="flex flex-col items-center md:items-start gap-3">
          
          <div>
            <p className="text-lg font-semibold text-gray-900 text-center md:text-left">
              Portal Barbaridade:
            </p>
            <p className="text-lg font-semibold text-gray-900 text-center md:text-left">
              "A ditadura no Rio Grande do Sul"
            </p>
          </div>

          {/* icones */}
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/alcaldeguima/projeto-barbaridade" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 hover:text-gray-600 transition-colors" />
            </Link>
            
            <Link 
              href="123@gmail.com" //trocar email
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6 hover:text-gray-600 transition-colors" />
            </Link>
            
            <Link 
              href="https://www.instagram.com/portalbarbaridade" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 hover:text-gray-600 transition-colors" />
            </Link>
          </div>
          
          <p className="text-sm text-gray-600 mt-1">&copy; {currentYear} Universidade Federal de Pelotas</p>
        </div>
      </div>
    </footer>
  );
}