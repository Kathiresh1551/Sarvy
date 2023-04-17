import React, { useEffect, useState } from "react";
import HomeBg from '../assets/images/HomeHeader.png';
import HeaderBg from '../assets/images/HeaderBg.png';
import { useHistory, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';
import './Header.scss';

const Header = (props) => {
    const [activeTab, setActiveTab] = useState('home');
    const [showProduct, setShowProduct] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const history = useHistory();
    const location= useLocation();

    useEffect(() => {
        if (location.pathname.includes('/product/')) {
            if (location.pathname.split('/product/')[1] === 'openwell') {
                setSelectedProduct('Openwell Submersible Pumps')
            } else if (location.pathname.split('/product/')[1] === 'industrialMotors') {
                setSelectedProduct('Industrial Motors')
            } else if (location.pathname.split('/product/')[1] === 'centrifugalPump') {
                setSelectedProduct('Centrifugal Pumps')
            } else if (location.pathname.split('/product/')[1] === 'V4') {
                setSelectedProduct('V4 Submersible Pumps')
            } else if (location.pathname.split('/product/')[1] === 'selfPriming') {
                setSelectedProduct('Self Priming Pumps')
            }
            setShowProduct(true)
        }
        const pathName = location.pathname.replace('/', '');
        setActiveTab(pathName === '' ? 'home' : pathName)
    }, [location.pathname])

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
                                showProduct && (
                                    <>
                                        <div className="currentTabName">
                                            {selectedProduct}
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