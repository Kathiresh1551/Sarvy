import React from "react";
import FooterBG from '../assets/images/FooterBG.png';
import './Footer.scss';
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <img className="footerBg" src={FooterBG} />
            </div>
        </>
    )   

}
export default Footer;