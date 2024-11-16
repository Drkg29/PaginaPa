import React, { useState } from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    id: 1,
    name: 'Carolina Blanquicett',
    image: 'Caro.jpg',
    description: 'Desarrolladora especializada en frontend con especialidad en React y CSS.'
  },
  {
    id: 2,
    name: 'Jose Martinez',
    image: 'Jose.jpg',
    description: 'Desarrollador de Backend y bases de datos SQL y NoSQL.'
  },
  {
    id: 3,
    name: 'David Reyes',
    image: 'David.png',
    description: 'Desarrollador de Backend especializado en SpringBoot.'
  }
];

function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="team-container">
      <h2 className="team-title">Nuestro Equipo</h2>
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card" onClick={() => handleClick(member)}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
      
      {selectedMember && (
        <div className="team-description">
          <h3>{selectedMember.name}</h3>
          <p>{selectedMember.description}</p>
          <button onClick={() => setSelectedMember(null)}>Cerrar</button>
        </div>
      )}
    </div>
  );
}

export default OurTeam;
