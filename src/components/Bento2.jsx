import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Bento2.css';
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import avatarImage from '/img/avatar.jpg';
import logo5D from '/img/logo5D.jpg';


const Bento2 = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
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
                        <div className="secondexperience" onClick={() => handleClick('/bento')}>
                            <IoIosAdd size={32} />
                        </div>
                        <div className="thirdexperience" onClick={() => handleClick('/bento3')}>
                            <IoIosAdd size={32} />
                        </div>
                    </div>
                </div>
                <div className="div3">
                    <h2> My Works </h2>
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
            </div>
        </div>
    );
}

export default Bento2;