import React from "react";
import './css/BilanPerso.css';

const BilanPerso = () => {
    return (
        <div className="bilan-perso" id="bilan-perso">
            <h1> Bilan Personnel </h1>
            <div className="bilan">
                <div className="learned">
                    <div className="title">
                    <h2> Ce que j'ai appris </h2>
                    </div>
                    <div className="summary">
                        <p> Architecture MVC complète avec Symfony  </p>
                        <p> Gestion BDD avec Doctrine + MySQL  </p>
                        <p> Débogage en environnement réel  </p>
                        <p> Travail en équipe sur des projets clients</p>
                    </div>
                </div>
                <div className="liked">
                    <div className="title">
                    <h2> Ce que j'ai aimé </h2>
                    </div>
                    <div className="summary">
                        <p> Variété des projets : maintenance, e-commerce, développement sur-mesure</p>
                        <p> Courbe d'apprentissage intense de Symfony</p>
                        <p> Environnement bienveillant pour progresser</p>
                    </div>
                </div>
                <div className="difficulty">
                    <div className="title">
                        <h2> Difficulté surmontée </h2>
                    </div>
                    <div className="summary">
                        <p> Le défi : Maîtriser Symfony sans base PHP solide  </p>
                        <p> Comment : Projet découverte + documentation + tutoriels  </p>
                        <p> Résultat : Capacité d'auto-formation et confiance en mes capacités d'adaptation</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BilanPerso;
