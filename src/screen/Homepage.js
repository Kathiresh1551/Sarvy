import React, { useState } from "react";
import HomeBg from '../assets/images/HomeHeader.png';
import logo from '../assets/images/logo.png';
import './Homepage.scss';

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('home')


    const handleSelectedTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className="homePage">
                <div className="header">
                    <img src={HomeBg} className="headerImg" alt="header" />
                </div>
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

                            <div className="desc">
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo
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
            </div>
        </>
    )
}
export default Homepage;