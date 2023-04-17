import { Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Manufacturing from '../../assets/images/Manufacturing.png';
import Installation from '../../assets/images/Installation.png';
import Repairing from '../../assets/images/Repairing.png';
import CompanyOverview from './CompanyOverview';
// import Applications from './Applications';
import { useLocation } from "react-router-dom";
import Products from "./Products";
import './Homepage.scss';
import Slider from "react-slick";

const Homepage = (props) => {
    const { history } = props;
    const [subTab, setSubTab] = useState('about')
    const location = useLocation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleSubTabChange = (ele, newValue) => {
        setSubTab(newValue)
    }

    const productScroll = React.createRef();
    useEffect(() => {
        if (location.pathname === '/products') {
            console.log('------------->');
            productScroll.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    })

    const handelSelectedProduct = (product) => {
        history.push(`product/${product}`)
    }


    return (
        <>
            <div className="homePage">
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
                            <img className="serviceImgs" src={Manufacturing} alt="serviceImg" />
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
                    {/* <Applications /> */}
                </div>

                <div className="ourProducts" ref={productScroll}>
                    <Products 
                        handelSelectedProduct={handelSelectedProduct}
                    />
                </div>

                {/* <div className="services">
                <div className="title">Services</div>
                    <div className="servicesContainer">
                        <div className="servicesImg">
                            <img className="serviceImgs" src={Manufacturing} alt="manufacturingImg" />
                            <img className="serviceImgs" src={Installation} alt="installationImg"/>
                            <img className="serviceImgs" src={Repairing} alt="reparingImg" />
                        </div>
                    </div>
                </div>   */}
            </div>
        </>
    )
}
export default Homepage;