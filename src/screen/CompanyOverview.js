import React from "react";
import Slider from "react-slick";
import './CompanyOverview.scss'
const CompanyOverview = () => {
    return (
        <>
            <div>
                <Slider
                    dots={true}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    speed={2000}
                    autoplaySpeed={10000}
                    cssEase="linear"
                    className="slider"
                >
                    
                </Slider>

                <div className="companyOverview">
                    <div className="title">
                        Company Overview
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </>
    )
}
export default CompanyOverview;