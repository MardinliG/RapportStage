import React from "react";
import './css/BilanPerso.css';

const BilanPerso = () => {
    return (
        <div className="bilan-perso">
            <h1> Bilan Personnel </h1>
            <div className="bilan">
                <div className="learned">
                    <h2> Ce que j'ai appris </h2>
                    <ul>
                        <li> ✅ Architecture MVC complète avec Symfony  </li>
                        <li> ✅ Gestion BDD avec Doctrine + MySQL  </li>
                        <li> ✅ Débogage en environnement réel  </li>
                        <li> ✅ Travail en équipe sur des projets clients</li>
                    </ul>
                </div>
                <div className="liked">
                    <h2> Ce que j'ai aimé </h2>
                    <ul>
                        <li> Variété des projets : maintenance, e-commerce, développement sur-mesure</li>
                        <li> Courbe d'apprentissage intense de Symfony</li>
                        <li> Environnement bienveillant pour progresser</li>
                    </ul>
                </div>
                <div className="difficulty">
                <h2> Difficulté surmontée </h2>
                    <ul>
                        <li> Le défi : Maîtriser Symfony sans base PHP solide  </li>
                        <li> Comment : Projet test personnel + documentation + tutoriels  </li>
                        <li> Résultat : Capacité d'auto-formation et confiance en mes capacités d'adaptation</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BilanPerso;
