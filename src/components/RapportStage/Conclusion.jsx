import React from "react";
import './css/Conclusion.css';

const Conclusion = () => {
  return (
    <div className="conclusion" id="conclusion">
      <h1 className="conclusion-title">Conclusion</h1>
      <p className="conclusion-text">
        L'expérience m'a permis de découvrir les aspects du métier que je n'avais qu'effleurés pendant ma formation : la maintenance de code existant, la collaboration en équipe de développement, la gestion des contraintes clients, et l'importance de la documentation technique. <span className="mobile-break"></span>  Cette vision globale du métier renforce ma motivation à poursuivre dans cette voie.
      </p>
      <h2 className="conclusion-subtitle"> Évolution de ma vision du secteur </h2>
      <div className="conclusion-list">
        <p> Ma compréhension du secteur du développement web s'est considérablement enrichie. J'ai réalisé que le développement ne se limite pas à l'écriture de code, mais implique une dimension importante de communication, de gestion de projet, et d'adaptation constante aux évolutions technologiques. </p>
      </div>
      <h2 className="conclusion-subtitle">Pour la suite</h2>
      <div className="conclusion-list">
        <p>
          Mon objectif principal est d’approfondir mes compétences en Symfony à travers la réalisation de projets personnels concrets. <span className="mobile-break"></span> 
          En parallèle, je souhaite continuer à découvrir et expérimenter de nouvelles technologies et frameworks afin d’élargir mon champ de compétences.
        </p>
        <p> L'expérience du travail en équipe et de la communication avec des profils variés (chefs de projets, designers, clients) constituera un atout important pour mes futures collaborations professionnelles. </p>
        <p> Enfin, la compréhension concrète des enjeux business du développement web (maintenance, évolutivité, performance) m'aidera à développer des solutions plus pertinentes et durables dans mes futurs projets. </p>
      </div>
    </div>
  );
};

export default Conclusion;
