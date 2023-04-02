import React, { useEffect, useState } from "react";
import HomeBg from '../assets/images/HomeHeader.png';
import HeaderBg from '../assets/images/HeaderBg.png';
import { useHistory, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';
import './Header.scss';

const Header = (props) => {
    const [activeTab, setActiveTab] = useState('home');

    const history = useHistory();
    const location= useLocation();

    console.log(location.pathname);

    useEffect(() => {
        const pathName = location.pathname.replace('/', '');
        setActiveTab(pathName === '' ? 'home' : pathName)
    }, [])

    const handleSelectedTab = (tab) => {
        if (tab === 'products') {
            history.push('/products')
        } else if (tab === 'applications') {
            history.push('/applications')
        } else if (tab === 'aboutUs') {
            history.push('/aboutUs')
        } else if (tab === 'contactUs') {
            history.push('/contactUs')
        } else if (tab === 'home') {
            history.push('/')
        }
        setActiveTab(tab)
    }

    console.log(activeTab);
    
    return (
        <>
            <div className="header">
                <img src={location.pathname === '/' ? HomeBg : HeaderBg} className="headerImg" alt="header" />
            </div>

            <div>

                <div className="tabContainer">
                    <div className="Tabs">
                        <div className={activeTab === 'home' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('home')}>
                            Home
                        </div>

                        <div className={activeTab === 'products' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('products')}>
                            Products
                        </div>

                        <div className={activeTab === 'applications' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('applications')}>
                            Application
                        </div>

                        <div className={activeTab === 'aboutUs' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('aboutUs')}>
                            About Us
                        </div>

                        <div className={activeTab === 'contactUs' ? "activeTab" : "tabName"} onClick={() => handleSelectedTab('contactUs')}>
                            Contact Us
                        </div>
                    </div>
                </div>
                {location.pathname === '/' ? 
                (
                    <>
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
                    </>
                ) : (
                    <>
                        <div>
                            {
                                activeTab === 'products' && (
                                    <>
                                        <div className="currentTabName">
                                            Products
                                        </div>
                                    </>
                                )
                            }

                            {
                                activeTab === 'applications' && (
                                    <>
                                        <div className="currentTabName">
                                            Applications
                                        </div>
                                    </>
                                )
                            }

                            {
                                activeTab === 'aboutUs' && (
                                    <>
                                        <div className="currentTabName">
                                            About Us
                                        </div>
                                    </>
                                )
                            }

                            {
                                activeTab === 'contactUs' && (
                                    <>
                                        <div className="currentTabName">
                                            Contact Us
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </>
                )}
                
            </div>
        </>
    )
}
export default Header;