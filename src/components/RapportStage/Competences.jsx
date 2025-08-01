import React from "react";
import './css/Competences.css';
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaSymfony } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import { SiPrestashop } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiXampp } from "react-icons/si";



const Competences = () => {
    return (
        <div className="skills" id="competences">
            <div className="skills-title">
                <h2>Compétences mobilisées</h2>
            </div>

            <div className="skills-grid">
                <div className="skills-section">
                    <div className="tech-logos">
                        <div className="tech-item" title="PHP">
                            <FaPhp size={40} />
                        </div>
                        <div className="tech-item" title="HTML5">
                            <FaHtml5 size={40} /> 
                        </div>
                        <div className="tech-item" title="CSS3 ">
                            <FaCss3 size={40} />
                        </div>
                        <div className="tech-item" title="MySQL">
                            <DiMysql size={40} />
                        </div>
                        <div className="tech-item" title="Symfony">
                            <FaSymfony size={40} />
                        </div>
                        <div className="tech-item" title="WordPress">
                            <FaWordpressSimple size={40} />
                        </div>
                        <div className="tech-item" title="PrestaShop">
                            <SiPrestashop size={40} />
                        </div>
                        <div className="tech-item" title="Git">
                            <FaGitAlt size={40} />
                        </div>
                        <div className="tech-item" title="XAMPP">
                            <SiXampp size={40} />
                        </div>
                    </div>  
                </div>

                
                <div className="skills-section">
                    <div className="skills-list">
                        <h3>Autonomie et auto-formation</h3>
                        <p>Ma capacité d'apprentissage autonome s'est considérablement développée durant ce stage. Face à Symfony, une technologie que je ne maîtrisais pas, j'ai mis en place une méthodologie d'auto-formation efficace : consultation de la documentation officielle, réalisation d'exercices pratiques, et recherche de solutions à des problèmes concrets. Cette approche m'a permis de devenir opérationnel rapidement sur des projets clients réels.</p>
                        <h3> Communication professionnelle </h3>
                        <p>Les interactions quotidiennes avec l'équipe ont développé mes compétences communicationnelles dans un contexte professionnel. J'ai appris à poser les bonnes questions techniques, à présenter clairement l'avancement de mes travaux, et à demander de l'aide de manière constructive quand nécessaire.</p>
                        <h3> Rigueur et méthodologie </h3>
                        <p>Le travail sur du code existant en production m'a inculqué une rigueur particulière : lecture approfondie du code avant toute modification, respect strict des conventions établies, tests systématiques avant mise en production, et documentation des modifications apportées.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Competences;
