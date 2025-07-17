import React from 'react';
import '../assets/Bento.css';

const Bento = () => {
    return (
        <div className="bento-container">
            <h1 className="bento-title">Tableau de Bord - Mon Stage</h1>
            <div className="bento-grid">
                <div className="bento-item bento-item-1">
                    <h3>Profil</h3>
                    <p>Mes informations personnelles et académiques</p>
                </div>
                <div className="bento-item bento-item-2">
                    <h3>Compétences Acquises</h3>
                    <p>Les nouvelles compétences développées pendant le stage</p>
                </div>
                <div className="bento-item bento-item-3">
                    <h3>Projets Réalisés</h3>
                    <p>Aperçu des projets sur lesquels j'ai travaillé</p>
                </div>
                <div className="bento-item bento-item-4">
                    <h3>Entreprise</h3>
                    <p>Présentation de la structure d'accueil</p>
                </div>
                <div className="bento-item bento-item-5">
                    <h3>Timeline</h3>
                    <p>Chronologie de mon parcours de stage</p>
                </div>
                <div className="bento-item bento-item-6">
                    <h3>Objectifs</h3>
                    <p>Mes objectifs et leur réalisation</p>
                </div>
                <div className="bento-item bento-item-7">
                    <p>Mail</p>
                </div>
                <div className="bento-item bento-item-8">
                    <p>Github</p>
                </div>
                <div className="bento-item bento-item-9">
                    <p>LinkedIn</p>
                </div>
            </div>
        </div>
    );
}

export default Bento;