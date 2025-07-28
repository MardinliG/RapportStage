import React from "react";
import '../assets/RapportStage.css';
import Sommaire from './RapportStage/Sommaire';
import BilanPerso from './RapportStage/BilanPerso';
import Conclusion from './RapportStage/Conclusion';

const RapportStage = () => {
    return (
        <div className="rapport-stage">
            <Sommaire />
            <BilanPerso />
            <Conclusion />
        </div>
    );
}

export default RapportStage;