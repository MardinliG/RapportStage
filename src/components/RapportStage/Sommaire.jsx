import React from "react";
import './css/Sommaire.css';
import arrowIcon from '../../assets/arrow.svg';


const contentItems = [
  { number: "01.", title: "SOMMAIRE", subtitle: "" },
  { number: "02.", title: "L'ENTREPRISE", subtitle: "- Nom de l’entreprise\n- Localisation\n- Durée du stage\n- Présentation rapide de l’entreprise" },
  { number: "03.", title: "MES MISSIONS", subtitle: "- Description de mon rôle pendant le stage\n- Mes tâches et projets menés\n- Ma place dans l’entreprise" },
  { number: "04.", title: "COMPÉTENCES MOBILISÉES", subtitle: "- Compétences techniques : outils, langages, méthodes, etc.\n- Compétences transversales : autonomie, capacité d’adaptation, curiosité, communication…" },
  { number: "05.", title: "BILAN PERSONNEL", subtitle: "- Compétences développées pendant le stage (hard & soft skills)\n- Ressentis \n- Progrès professionnels\n- Difficulté rencontrée" },
  { number: "06.", title: "CONCLUSION", subtitle: "- Impact sur mon projet pro ?\n- Comment cette expérience va-t-elle me servir pour la suite ?" },
  { number: "07.", title: "REMERCIEMENTS", subtitle: "" },
];

const Sommaire = () => {
  return (
    <div className="parent" id="sommaire">
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3"></div>
      <div className="div4"></div>
      <div className="div5"></div>
      <a className="div6" href="#sommaire"> 
          <div className="chapter-number">{contentItems[0].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[0].title}</div>
          <div className="chapter-subtitle">{contentItems[0].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div7" href="#entreprise">
        <div className="chapter-number">{contentItems[1].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[1].title}</div>
          <div className="chapter-subtitle">{contentItems[1].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div8" href="#mission">
        <div className="chapter-number">{contentItems[2].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[2].title}</div>
          <div className="chapter-subtitle">{contentItems[2].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div9" href="#competences">
        <div className="chapter-number">{contentItems[3].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[3].title}</div>
          <div className="chapter-subtitle">{contentItems[3].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div10" href="#remerciements">
        <div className="chapter-number">{contentItems[6].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[6].title}</div>
          <div className="chapter-subtitle">{contentItems[6].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div11" href="#conclusion">
        <div className="chapter-number">{contentItems[5].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[5].title}</div>
          <div className="chapter-subtitle">{contentItems[5].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
      <a className="div12" href="#bilan-perso">
        <div className="chapter-number">{contentItems[4].number}</div>
          <div className="chapter-separator"></div>
          <div className="chapter-title">{contentItems[4].title}</div>
          <div className="chapter-subtitle">{contentItems[4].subtitle}</div>
          <div className="arrow"> <img src={arrowIcon} alt="arrow" /></div>
      </a>
    </div>
  );
};

export default Sommaire;
