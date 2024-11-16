import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import OurTeam from "./OurTeam.js";
import Services from "./Services.js";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
        <div className="logo"></div> 
          <nav className="nav">
            <a href="/">Inicio</a>
            <a href="/about">Acerca de Nosotros</a>
            <a href="/team">Nuestro Equipo</a>
            <a href="/services">Servicios</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

