import React, { useState } from "react";
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
                    <p className="about"> Blog123 - Site about athletes interviews </p>
                    <div className="caroussel"> Caroussel </div>
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