import React from "react";
import './css/Conclusion.css';

const Conclusion = () => {
  return (
    <div className="conclusion">
      <h1 className="conclusion-title">Conclusion</h1>
      <p className="conclusion-text">
        Ce stage m'a confirmé mon orientation vers le développement web.
        J'ai acquis une vision concrète du métier et une méthodologie d'apprentissage reproductible.
      </p>
      <h2 className="conclusion-subtitle">Pour la suite</h2>
      <div className="conclusion-list">
        <p>Approfondir Symfony par des projets personnels</p>
        <p>Continuer à apprendre de nouvelles technologies et frameworks.</p>
        <p>Continuer à développer ma capacité d'auto-formation</p>
      </div>
    </div>
  );
};

export default Conclusion;
