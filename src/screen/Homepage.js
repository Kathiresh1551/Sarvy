import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import HomeBg from '../assets/images/HomeHeader.png';
import logo from '../assets/images/logo.png';
import CompanyOverview from "./CompanyOverview";
import Applications from './Applications';
import './Homepage.scss';

const Homepage = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [subTab, setSubTab] = useState('about')


    const handleSelectedTab = (tab) => {
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

                <div className="companyOverview">
                    <CompanyOverview />
                </div>

                <div className="applications">
                    <Applications />
                </div>

                
            </div>
        </>
    )
}
export default Homepage;