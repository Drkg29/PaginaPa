import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <main className="main-content">
        <h1 className="project-name">{"Fitness Store"}</h1>
        <p className="description">
          ¡Las mejores proteinas del mercado a los mejores precios!
        </p>
        <div className="cards">
          <div className="card">
            <img src="supl4.png" alt="About us" />
            <h3>Acerca de Nosotros</h3>
            <button className="button" onClick={() => navigate("/about")}>Mas Info</button>
          </div>
          <div className="card">
            <img src="team.png" alt="Our Team" />
            <h3>Nuestro Equipo</h3>
            <button className="button" onClick={() => navigate("/team")}>Mas Info</button>
          </div>
          <div className="card">
            <img src="serv.png" alt="Services" />
            <h3>Servicios</h3>
            <button className="button" onClick={() => navigate("/services")}>Mas Info</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
