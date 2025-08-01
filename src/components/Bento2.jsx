import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Bento2.css';
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import avatarImage from '/img/avatar.jpg';

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import { FaSymfony } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

import { FaWordpressSimple } from "react-icons/fa";




const Bento2 = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [works, setWorks] = useState([]);
    const [currentWork, setCurrentWork] = useState(0);
    const [experiences, setExperiences] = useState([]);
    const apiUrl = import.meta.env.VITE_API_URL;
    const [hoveredExperience, setHoveredExperience] = useState(null);

    useEffect(() => {
        const MIN_LOADING_TIME = 1200;
        const start = Date.now();

        Promise.all([
            fetch(`${apiUrl}/api/works`).then(res => res.json()),
            fetch(`${apiUrl}/api/experiences`).then(res => res.json())
        ])
        .then(([worksData, experiencesData]) => {
            setWorks(worksData);
            setExperiences(experiencesData);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);

    // Carrousel automatique
    useEffect(() => {
        if (works.length === 0) return;
        const interval = setInterval(() => {
            setCurrentWork(prev =>
                prev + 1 < works.length ? prev + 1 : 0
            );
        }, 8000); // Change toutes les 8 secondes
        return () => clearInterval(interval);
    }, [works]);

    const handleClick = (url) => {
        if (url) {
            window.open(url, "_blank");
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };


/*----------------------------------------------------------------------------------------------------------------------------------------------------*/


    return (
        <div className="bento2-wrapper">
            <div className="parent">

                {/* ---------------------- DIV 1 INTERESTED ---------------------- */}
                <div className="div1">
                    <div className="grid-containers">
                        <div className="grid-items it1">
                            <FaReact  size={32}/>
                        </div>
                        <div className="grid-items it2">
                            <RiTailwindCssFill size={32}/>
                        </div>
                        <div className="grid-items it3">
                            <FaPhp size={32}/>
                        </div>
                        <div className="grid-items it4">
                            <FaSymfony size={32}/>
                        </div>

                        <div className="grid-items it5">
                            <SiSupabase size={32}/>
                        </div>
                        <div className="grid-items it6">
                            <SiVite size={32}/>
                        </div>
                        <div className="grid-items it7">
                            <SiMysql size={32}/>
                        </div>
                        <div className="grid-items it8">
                            <SiNextdotjs size={32}/>
                        </div>

                        <div className="grid-items it9">
                            <FaPython size={32}/>
                        </div>
                        <div className="grid-items it10">
                            <FaJava size={32}/>
                        </div>
                        <div className="grid-items it11">
                            <FaTrello size={32}/>
                        </div>
                        <div className="grid-items it12">
                            <FaGitAlt size={32}/>
                        </div>
                    </div>
                </div>

                {/* ---------------------- DIV 2 EXPERIENCES ---------------------- */}
                <div className="div2">
                    <h2> Experiences </h2>
                    <p className="about"> {experiences[hoveredExperience ?? 0]?.contrat} - {experiences[hoveredExperience ?? 0]?.name} </p>
                    <div className="stage">
                        <div className="firstexperience" 
                        onClick={() => handleClick(experiences[0]?.link)}
                        onMouseEnter={() => setHoveredExperience(0)}
                        onMouseLeave={() => setHoveredExperience(null)}
                        >
                            <img src={experiences[0]?.image} alt="Logo 5D" className="logo5D" />
                        </div>
                        <div className="secondexperience"
                          onClick={showModal}
                          onMouseEnter={() => setHoveredExperience(3)}
                          onMouseLeave={() => setHoveredExperience(3)}
                        >
                            <IoIosAdd size={32} />
                        </div>
                        <div className="thirdexperience"
                          onClick={showModal}
                          onMouseEnter={() => setHoveredExperience(3)}
                          onMouseLeave={() => setHoveredExperience(3)}
                        >
                            <IoIosAdd size={32} />
                        </div>
                    </div>
                </div>

                {/* ---------------------- DIV 3 LAST WORKS ---------------------- */}
                <div className="div3">
                    <h2> Last Works </h2>
                    <p className="about">
                        {works[currentWork]?.name} - {works[currentWork]?.description}
                    </p>
                    <div className="caroussel"
                        onClick={() => {
                            if (works.length > 0 && works[currentWork].link) {
                                window.open(works[currentWork].link, "_blank");
                            }
                        }}
                        style={{
                            cursor: works.length > 0 && works[currentWork].link ? "pointer" : "default"
                        }}
                    >
                        {works.length > 0 && (
                            <img
                                src={works[currentWork].image}
                                alt={works[currentWork].name}
                                style={{
                                    width: "120px",
                                    borderRadius: "12px"
                                }}
                            />
                        )}
                    </div>
                </div>

                {/* ---------------------- DIV 4 AVATAR ---------------------- */}
                <div className="div4">
                    <img src={avatarImage} alt="Avatar" className="avatar"/>
                </div>

                {/* ---------------------- DIV 5 ABOUT ME ---------------------- */}
                <div className="div5">
                    <h2> About me </h2>
                    <p> Driven by curiosity and a passion for technology, I’m actively looking for a work-study position in web development where I can apply my skills and continue growing within a dynamic team.  </p>
                </div>

                {/* ---------------------- DIV 6 HELLO GUILLAUME ---------------------- */}
                <div className="div6">
                    <h2> Hello ! I'm Guillaume <span className="hand">👋</span> </h2>
                    <p> A junior web developer based in Toulouse, currently pursuing a Bachelor's degree in Computer Science at Ynov Campus. I'm in my third year, aiming to become a software development expert upon graduation. </p>
                </div>

                {/* ---------------------- DIV 7 SOCIAL ICONS ---------------------- */}
                <div className="div7">
                    {/*
                    <a href="mailto:guillaume.mardinli@ynov.com" className="button-container">
                        <div className="button-container">Contact Me !</div>
                    </a>
                    <a href="https://github.com/MardinliG" className="github" target="_blank">
                        <div className="button-container">
                            <FaGithub size={32} />
                        </div>
                    </a> */}
                    <div className="grid-stack">
                        <div className="stack it1">
                            <div className="button-container">Contact Me !</div>
                        </div>
                        <div className="stack it2">
                            <FaGithub size={32} />
                        </div>
                    </div>
                </div>

                {/* ---------------------- MODAL ---------------------- */}
                {modalVisible && (
                    <div className="modal-overlay" onClick={hideModal}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <a onClick={hideModal} className="close-button">
                                <IoIosClose size={32} />
                            </a>
                            <div className="modal-content">
                                <h3>Not Yet ...</h3>
                                <p>You could be the <strong>Next One</strong> !</p>
                                <div className="button-container">
                                    <a href="mailto:guillaume.mardinli@ynov.com" className="button">Let's talk - Contact Me!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Bento2;