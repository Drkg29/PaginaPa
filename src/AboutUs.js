import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <main className="main-content">
        <h1 className="project-name">{"Acerca de Nosotros"}</h1>
        <div className="about-card">
          <img src="Supl2.png" alt="About Us" />
          <div className="about-content">
            <h3>Acerca de Nosotros</h3>
            <p>Nos enfocamos en la venta y distribucion de suplementos proteicos en el ambito deportivo.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
