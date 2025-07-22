import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Bento2.css';
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import avatarImage from '/img/avatar.jpg';
import logo5D from '/img/logo5D.jpg';


const Bento2 = () => {
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);
    const [works, setWorks] = useState([]);
    const [currentWork, setCurrentWork] = useState(0);
    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/api/works`)
            .then(res => res.json())
            .then(data => setWorks(data))
            .catch(err => console.error(err));
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
        navigate(url);
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="bento2-wrapper">
            <div className="parent">
                <div className="div1">
                    <h2>You are <br /> interested ?</h2>
                    <div className="button-container">
                        <a href="mailto:guillaume.mardinli@ynov.com" className="button">Contact Me !</a>
                    </div>
                </div>
                <div className="div2">
                    <h2> Experiences </h2>
                    <p className="about"> Stage - Cinquieme Dimension </p>
                    <div className="stage">
                        <div className="firstexperience" onClick={() => handleClick('/5dimension')}>
                            <img src={logo5D} alt="Logo 5D" className="logo5D" />
                        </div>
                        <div className="secondexperience" onClick={showModal}>
                            <IoIosAdd size={32} />
                        </div>
                        <div className="thirdexperience" onClick={showModal}>
                            <IoIosAdd size={32} />
                        </div>
                    </div>
                </div>
                <div className="div3">
                    <h2> Last Works </h2>
                    <p className="about">
                        {works[currentWork]?.name} - {works[currentWork]?.description}
                    </p>
                    <div className="caroussel">
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
                <div className="div4">
                    <img src={avatarImage} alt="Avatar" className="avatar"/>
                </div>
                <div className="div5">
                    <h2> About me </h2>
                    <p> Lorem Ipsum Quid enim tam absurdum quam delectari multis inanimis </p>
                </div>
                <div className="div6">
                    <h2> Hello ! I'm Guillaume <span className="hand">👋</span> </h2>
                    <p> Lorem Ipsum Quid enim tam absurdum quam delectari multis inanimis </p>
                </div>
                <div className="div7">
                    <div className="div8">
                        <a href="https://github.com/MardinliG" className="icon" target="_blank"> <FaGithub size={32} /> </a>
                    </div>
                    <div className="div9">
                        <a href="mailto:guillaume.mardinli@ynov.com" className="icon"> <CiMail size={32} /> </a>
                    </div>
                    <div className="div10">
                        <a href="https://fr.linkedin.com/in/guillaume-mardinli-1212b1269" className="icon" target="_blank"> <FaLinkedinIn size={32} /> </a>
                    </div>
                </div>
                
                {modalVisible && (
                    <div className="modal-overlay" onClick={hideModal}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <a onClick={hideModal} className="close-button">
                                <IoIosClose size={32} />
                            </a>
                            <div className="modal-content">
                                <h3>Not Yet ...</h3>
                                <p>You could be the <strong>Next One</strong> !</p> {/* mettre des majuscules et jouer avec le gras */}
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