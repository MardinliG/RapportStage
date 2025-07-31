import React from "react";
import './css/Equipe.css';

const teamMember = [
    { name: "Bruno", role: "Directeur de projets", photo: "/img/equipe/bruno.jpg" },
    { name: "Marjorie", role: "Chef de projets", photo: "/img/equipe/marjorie.jpg" },
    { name: "Gwenaëlle", role: "Responsable Pôle Digital", photo: "/img/equipe/gwenaelle.png" },
    { name: "Aurélie", role: "Graphiste", photo: "/img/equipe/aurelie.png" },
    { name: "Tony", role: "Développeur", photo: "/img/equipe/tony.png"},
    { name: "Fares", role: "Développeur", photo: "/img/equipe/fares.jpg" },
    { name: "Mia", role: "Responsable des réseaux sociaux", photo: "/img/equipe/mia.jpg" },
    { name: "Lorenzo", role: "Responsable des réseaux sociaux", photo: "/img/equipe/lorenzo.jpg" },
    { name: "Rachel", role: "Responsable des réseaux sociaux", photo: "/img/equipe/rachel.jpg" }
];

const Equipe = () => {
  return (
    <div className="equipe">
        <div className="title">
            <h1>L'Équipe</h1>
        </div>
        <div className="content">
            {teamMember.map((member, index) => (
                <div className={`team${index + 1}`} key={index}>
                <div className="team-photo">
                    <img src={member.photo} alt={member.name} />
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Equipe;
