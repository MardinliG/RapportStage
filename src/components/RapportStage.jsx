import React from "react";
import '../assets/RapportStage.css';
import Acceuil from "./RapportStage/Acceuil";
import Sommaire from './RapportStage/Sommaire';
import Equipe from "./RapportStage/equipe";
import Entreprise from './RapportStage/Entreprise';
import Mission from "./RapportStage/Missions";
import Competences from "./RapportStage/Competences";
import BilanPerso from "./RapportStage/BilanPerso";
import Conclusion from './RapportStage/Conclusion';
import Remerciements from "./RapportStage/Remerciements";


const RapportStage = () => {
    return (
        <div className="rapport-stage">
            <Acceuil />
            <Sommaire />
            <Equipe />
            <Entreprise />
            <Mission />
            <Competences />
            <BilanPerso />
            <Conclusion />
            <Remerciements />
        </div>
    );
}

export default RapportStage;