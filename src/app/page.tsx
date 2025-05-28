"use client"; // Isso é obrigatório pra conseguir usar o react

import React, { useState } from "react";
import MapaRS from "./map";
import About from "./about";
import Navbar from "./navbar";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  // Handler to show About page
  const handleShowAbout = () => setShowAbout(true);

  // Handler to go back to Home 
  const handleShowHome = () => setShowAbout(false);

  return (
    <>
      <Navbar onAboutClick={handleShowAbout} onHomeClick={handleShowHome} activePage={showAbout ? "about" : "map"} />
      {showAbout ? <About /> : <MapaRS />}
    </>
  );
}