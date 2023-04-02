import React from "react";
import FooterBG from '../assets/images/FooterBG.png';
import logo from '../assets/images/logo.png';
import './Footer.scss';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <img className="footerBg" src={FooterBG} />
            </div>
            <div className="logoContent">
                <div className="logoAndName">
                    <img src={logo} className="footerLogo" />

                    <div className="companyInfo">
                        <div className="sarvy">SARVY</div>
                        PUMPS & MOTORS
                    </div>
                </div>

                <div className="visitUS">
                    INstagram
                </div>

                <div className="address">
                    Address
                    <br />
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    </div>
                </div>
            </div>
        </>
    )   

}
export default Footer;