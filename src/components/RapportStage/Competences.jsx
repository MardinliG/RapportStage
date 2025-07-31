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
                        <p><strong>Autonomie</strong> : Auto-formation rapide via documentation officielle</p>
                        <p><strong>Adaptabilité</strong> : Passage de WordPress à Symfony sans base préalable</p>
                        <p><strong>Communication</strong> : Échanges clairs avec l'équipe pour comprendre les projets</p>
                        <p><strong>Rigueur</strong> : Lecture de code existant, respect des conventions, tests unitaires</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Competences;
