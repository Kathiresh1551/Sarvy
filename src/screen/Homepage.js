import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeBg from '../assets/images/HomeHeader.png';
import logo from '../assets/images/logo.png';
import Manufacturing from '../assets/images/Manufacturing.png';
import Installation from '../assets/images/Installation.png';
import Repairing from '../assets/images/Repairing.png';
import CompanyOverview from "./CompanyOverview";
import Applications from './Applications';
import Footer from '../globals/Footer';
import './Homepage.scss';
import Slider from "react-slick";

const Homepage = (props) => {
    const [activeTab, setActiveTab] = useState('home');
    const [subTab, setSubTab] = useState('about')

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const handleSelectedTab = (tab) => {
        const { history } = props;
        if (tab === 'products') {
            history.push('/products')
        } else if (tab === 'application') {
            history.push('/applications')
        } else if (tab === 'about') {
            history.push('/aboutUs')
        } else if (tab === 'contact') {
            history.push('./contactUs')
        }
        setActiveTab(tab)
    }

    const handleSubTabChange = (ele, newValue) => {
        setSubTab(newValue)
    }

    return (
        <>
            
            <div className="header">
                <img src={HomeBg} className="headerImg" alt="header" />
            </div>
            <div className="homePage">
                <div className="tabContainer">
                    <div className="Tabs">
                        <div className={activeTab === 'home' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('home')}>
                            Home
                        </div>

                        <div className={activeTab === 'products' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('products')}>
                            Products
                        </div>

                        <div className={activeTab === 'application' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('application')}>
                            Application
                        </div>

                        <div className={activeTab === 'about' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('about')}>
                            About Us
                        </div>

                        <div className={activeTab === 'contact' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('contact')}>
                            Contact Us
                        </div>
                    </div>
                </div>

                <div className="company">
                    <div className="companyDetails">
                        <div>
                            <div className="companyName">
                                SARVESHWARA 
                                    <br />
                                INDUSTRIES
                            </div>

                            <div className="description">
                                Providing high in class fluid management solutions for the society to conserve nature resources.
                            </div>
                        </div>

                        <div>
                            <div className="logo">
                                <img src={logo} alt="logo" />
                            </div>

                            <div className="logoName">
                                SARVY
                                <br />
                                PUMPS & MOTORS
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subTabContainer">
                    <div className="subTab">
                        <Tabs 
                            value={subTab}
                            onChange={handleSubTabChange}
                            textColor="black"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                        >
                            <Tab value='about' label="About" />
                            <Tab value='services' label="Services" />
                            <Tab value='application' label="Application" />
                        </Tabs>
                    </div>
                </div>

                <div>
                <Slider {...settings}>
                    <div className="imgHolder">
                        <img className="serviceImgs" src={Manufacturing} alt="serviceImg"/>
                    </div>
                    <div className="imgHolder">
                        <img className="serviceImgs" src={Installation} alt="installationImg" />
                    </div>
                    <div className="imgHolder">
                        <img className="serviceImgs" src={Repairing} alt="repairingImg" />
                    </div>
                </Slider>
                </div>

                <div className="companyOverview">
                    <CompanyOverview />
                </div>

                <div className="applications">
                    <Applications />
                </div> 

                <div className="services">
                <div className="title">Services</div>
                    <div className="servicesContainer">
                        <div className="servicesImg">
                            <img className="serviceImgs" src={Manufacturing} alt="manufacturingImg" />
                            <img className="serviceImgs" src={Installation} alt="installationImg"/>
                            <img className="serviceImgs" src={Repairing} alt="reparingImg" />
                        </div>
                    </div>
                </div>  
            </div>
                <Footer />
        </>
    )
}
export default Homepage;