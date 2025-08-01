import React from "react";
import './css/Remerciements.css';

const Remerciements = () => {
    return (
        <div className="remerciements" id="remerciements">
            <div className="remerciements-title">
                <h2>Remerciements</h2>
            </div>
            <div className="remerciements-content">
                <p> Je tiens à remercier toute l'équipe de Cinquième Dimension pour son accueil, sa patience et ses conseils.</p>
                <p> Un remerciement particulier à <strong>Tony</strong> pour son accompagnement et sa confiance dans mes capacités d'apprentissage.</p>
                <p> Cette expérience restera une étape marquante de mon parcours de formation, et je suis reconnaissant d'avoir pu la vivre dans des conditions aussi favorables à l'apprentissage et à l'épanouissement professionnel.</p>
            </div>
        </div>
    );
}

export default Remerciements;
