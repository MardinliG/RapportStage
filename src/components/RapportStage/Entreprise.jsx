import React from "react";
import './css/Entreprise.css';

const Entreprise = () => {
    return (
        <div className="entreprise">
            <div className="image-container">
                <div className="img"><img src="/img/image.jpg" alt="Entreprise" /></div>
            </div>
            <div className="texte">
                <div className="info">
                    <h2> Cinquième Dimension - Agence web toulousaine </h2>
                    <p> Adresse : 123 Rue de l'Innovation, 31000 Toulouse </p>
                    <p> Secteur : Développement web et solutions numériques </p>
                    <p> Présentation rapide : Cinquième Dimension est une agence web toulousaine spécialisée dans la création de sites internet (WordPress, Prestashop), le développement sur-mesure avec Symfony, et la maintenance technique de solutions numériques pour des entreprises variées. Elle propose aussi des outils métiers adaptés à des besoins spécifiques (intranet, CRM, portails clients…). L’équipe se compose de développeurs full stack, chefs de projets et designers UI/UX. </p>
                </div>
                <div className="presentation">
                    <p>Spécialisée dans la création de sites internet (WordPress, Prestashop) et le développement sur-mesure avec Symfony. L'agence propose également des outils métiers adaptés (intranet, CRM, portails clients) pour des entreprises variées.</p>
                </div>
                <div className="team">
                    <p>Équipe : Développeurs full stack, chefs de projets, designers UI/UX</p>
                </div>
            </div>
        </div>
    );
}

export default Entreprise;
