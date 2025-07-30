import React from "react";
import './css/Missions.css';

const Mission = () => {
    return (
        <div className="mission">
            <div className="title">
                <h1>Missions</h1>
            </div>
            <div className="missions">
                <div className="mission-block">
                    <div className="mission-title">
                        <h3>🔧 <strong>Maintenance WordPress</strong></h3>
                    </div>
                    <div className="mission-content">
                        <p>Mises à jour de plugins (WPBakery, Slider Revolution, WPML)</p>
                        <p>Résolution de bugs de compatibilité et problèmes de licence</p>
                        <p>Correction d'alertes de sécurité selon les rapports</p>
                    </div>
                </div>
                <div className="mission-block">
                    <div className="mission-title">
                        <h3>🛒 <strong>Découverte Prestashop</strong></h3>
                    </div>
                    <div className="mission-content">
                        <p>Installation d'environnement local (WAMP)</p>
                        <p>Création d'un site e-commerce test</p>
                        <p>Exploration de l'architecture, modules et système de base de données</p>
                    </div>
                </div>
                <div className="mission-block">
                    <div className="mission-title">
                        <h3>🧱 <strong>Développement Symfony</strong></h3>
                    </div>
                    <div className="mission-content">
                        <p>Apprentissage complet du framework MVC</p>
                        <p>Création d'un projet personnel (to-do list)</p>
                        <p>Maîtrise de : routes/contrôleurs, Twig, Doctrine, système CRUD</p>
                        <p><strong>Projet client</strong> : Implémentation d'un système de groupes utilisateurs pour structurer un intranet</p>
                    </div>
                </div>
                <div className="mission-block">
                    <div className="mission-title">
                        <h3>🧰 <strong>Outils utilisés</strong></h3>
                    </div>
                    <div className="mission-content">
                        <p className="missions-tools">Trello/Jira • Bitbucket (Git) • WAMP • Composer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
