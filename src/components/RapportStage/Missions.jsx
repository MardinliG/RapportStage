import React from "react";
import './css/Missions.css';

const Mission = () => {
    return (
        <div className="mission" id="mission">
            <div className="title">
                <h1>Missions</h1>
            </div>
            <div className="mission-intro">
                <p>Intégré à l’équipe en tant que stagiaire développeur, j’ai eu l’opportunité de participer à différentes missions couvrant plusieurs technologies et types de projets.</p>
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
        <div className="integration-title">
            <h3>🔗 <strong>Intégration</strong></h3>
        </div>
        <div className="integration-content">
            <p>Mon intégration dans l'équipe s'est faite de manière progressive et collaborative. Rattaché hiérarchiquement à Tony, j'ai néanmoins interagi avec l'ensemble des membres de l'équipe selon les besoins des projets. <span className="mobile-break"></span> Les chefs de projets me briefaient sur les attentes clients, les autres développeurs partageaient leurs expériences techniques, et les designers m'aidaient à comprendre les enjeux d'interface utilisateur.</p>
            <p>Les méthodes de travail en équipe s'appuyaient sur des outils collaboratifs modernes : Trello et Jira pour la gestion des tâches et le suivi des projets, Bitbucket pour le versioning du code avec Git, et des réunions quotidiennes courtes pour synchroniser les activités de chacun.</p>
        </div>
    </div>

    );
}

export default Mission;
