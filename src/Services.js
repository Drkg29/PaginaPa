import React, { useState } from 'react';
import './Services.css';

const servicesList = [
  {
    id: 1,
    name: 'Productos de alta calidad',
    image: 'supl3.jpg',
    description: 'Ofrecemos marcas y productos recomendados de la mas alta calidad.'
  },
  {
    id: 2,
    name: 'Pagos Seguros',
    image: 'metopagos.png',
    description: 'Le damos la mano a los clientes al poder elegir cualquier metodo de pago disponible.'
  },
  {
    id: 3,
    name: 'Soporte',
    image: 'Soporte.png',
    description: 'Damos atencion al cliente en caso de que enfrente adversidades en el aplicativo Web.'
  }
];

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>
      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card" onClick={() => handleClick(service)}>
            <img src={service.image} alt={service.name} className="service-image" />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
      
      {selectedService && (
        <div className="service-description">
          <h3>{selectedService.name}</h3>
          <p>{selectedService.description}</p>
          <button onClick={() => setSelectedService(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default Services;
