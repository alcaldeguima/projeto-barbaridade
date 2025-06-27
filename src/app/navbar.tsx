"use client"; // Isso é obrigatório pra conseguir usar o react

import { useState } from "react";
import React from "react";

interface NavbarProps {
  onHomeClick?: () => void;
  onEquipeClick?: () => void;
  onSobreNosClick?: () => void;
  activePage?: "map" | "about";
}

function Navbar({ onHomeClick, onEquipeClick, onSobreNosClick, activePage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fecha o dropdown ao clicar fora
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const dropdown = document.getElementById("sobre-dropdown");
      const btn = document.getElementById("sobre-btn");
      if (
        isDropdownOpen &&
        dropdown &&
        btn &&
        !dropdown.contains(event.target as Node) &&
        !btn.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Projeto Barbaridade
          </span>
        </a>
        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "opacity-100 scale-100 transform transition-all duration-300 ease-in-out origin-top" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (onHomeClick) onHomeClick();
                }}
                className={
                  "block py-2 px-3 rounded md:p-0 " +
                  (activePage === "map"
                    ? "text-white bg-[--dark-green] md:bg-transparent md:text-[--dark-green] dark:text-white md:dark:text-[--light-green]"
                    : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--dark-green] dark:text-white md:dark:hover:text-[--light-green] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent")
                }
              >
                Mapa
              </a>
            </li>
            <li className="relative">
              <button
                id="sobre-btn"
                type="button"
                onClick={e => {
                  e.preventDefault();
                  setIsDropdownOpen((open) => !open);
                }}
                className={
                  "block py-2 px-3 rounded md:p-0 focus:outline-none text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[--dark-green] dark:text-white md:dark:hover:text-[--light-green] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                }
              >
                Sobre o projeto
              </button>
              {isDropdownOpen && (
                <div
                  id="sobre-dropdown"
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20"
                >
                  <button
                    className="w-full text-left py-2 px-4 text-gray-900 dark:text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      if (onEquipeClick) onEquipeClick();
                    }}
                  >
                    Equipe
                  </button>
                  <button
                    className="w-full text-left py-2 px-4 text-gray-900 dark:text-white text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      if (onSobreNosClick) onSobreNosClick();
                    }}
                  >
                    Sobre nós
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
