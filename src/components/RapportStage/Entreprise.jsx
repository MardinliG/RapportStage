import React from "react";
import './css/Entreprise.css';

const Entreprise = () => {
    return (
        <div className="entreprise" id="entreprise">
            <div className="image-container">
                <div className="test">
                    <img src="/img/logo5D.jpg" alt="Logo" />
                </div>
            </div>
            <div className="texte">
                <div className="info">
                    <h2> Cinquième Dimension </h2>
                    <p><span className="bold">Adresse :</span> 123 Rue de l'Innovation, 31000 Toulouse </p>
                    <p><span className="bold">Secteur :</span> Développement web et solutions numériques </p>
                    <p><span className="bold">Présentation :</span> Cinquième Dimension est une agence web toulousaine spécialisée dans la création de sites internet (WordPress, Prestashop), le développement sur-mesure avec Symfony, et la maintenance technique de solutions numériques pour des entreprises variées. Elle propose aussi des outils métiers adaptés à des besoins spécifiques (intranet, CRM, portails clients…). L’équipe se compose de développeurs full stack, chefs de projets et designers UI/UX. </p>
                </div>
                <div className="team">
                    <p><span className="bold">Équipe :</span> Développeurs full stack, chefs de projets, designers UI/UX</p>
                </div>
            </div>
        </div>
    );
}

export default Entreprise;
