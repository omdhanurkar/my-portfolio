import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>122,Dhanurkar Furnitures Amgaon</p>
                            <p>Maharashtra</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            7083507190
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk
                                size={20}
                                style={{ color: "#fff", marginRight: "2rem" }}
                            />
                            omdhanurkar444@gmail.com
                        </h4>
                    </div>
                </div>

                <div className="right">
                    <h4>About</h4>
                    <p>
                        This is me Omprakash Dhanurkar,I Graduated in mechancical
                        Enginnering but I was interested in It Sector so after graduation i
                        joined function bottcamp here i learned some technologies , i have
                        made projects on it, now i am backed developer
                    </p>
                    <div className="social">
                          
                        <a href="https://www.linkedin.com/in/omprakash-dhanurkar-86a0b2170/" ><FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }}/></a>
                        
                        
                        <a href="https://github.com/omdhanurkar" ><FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
