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
                    <p><span className="bold">Présentation :</span> Cinquième Dimension est une agence web toulousaine qui s'est spécialisée dans l'écosystème du développement web et des solutions numériques sur-mesure.<span className="mobile-break"></span> L'entreprise accompagne ses clients dans leur transformation digitale en proposant une gamme complète de services : création de sites internet avec des CMS comme WordPress et PrestaShop, développement d'applications web personnalisées utilisant le framework Symfony. </p>
                </div>
            </div>
        </div>
    );
}

export default Entreprise;
