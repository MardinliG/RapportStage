import React from "react";
import './css/Conclusion.css';

const Conclusion = () => {
  return (
    <div className="conclusion">
      <h1 className="conclusion-title">Conclusion</h1>
      <p className="conclusion-text">
        Ce stage m'a confirmé mon orientation vers le développement web.  <span className="mobile-break"><br /><br /> </span>
        J'ai acquis une vision concrète du métier et une méthodologie d'apprentissage reproductible.
      </p>
      <h2 className="conclusion-subtitle">Pour la suite</h2>
      <div className="conclusion-list">
        <p>
          Mon objectif principal est d’approfondir mes compétences en Symfony à travers la réalisation de projets personnels concrets. <span className="mobile-break"><br /><br /> </span> 
          En parallèle, je souhaite continuer à découvrir et expérimenter de nouvelles technologies et frameworks afin d’élargir mon champ de compétences. <span className="mobile-break"><br /><br /> </span>
          Enfin, je veux maintenir et renforcer ma capacité d’auto-formation, qui s’est révélée essentielle au cours de ce stage.
        </p>
      </div>
    </div>
  );
};

export default Conclusion;
