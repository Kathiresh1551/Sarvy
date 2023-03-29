import React from "react";
import Slider from "react-slick";
import data from './Applications.json';
import './Applications.scss'

const Applications = () => {
    return (
        <>
        
        <div className="applications">
            <div className="title">
                Applications
            </div>
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
                   <div className="applicationContainer">
                    {
                        data.map((ele) => (
                            <div className="applicationBG">
                                <div className="applicationName">
                                    {ele.name}
                                </div>
                                <div className="desc">
                                    {ele.desc}
                                </div>
                                <div>
                                    <div className="operations">Operations</div>
                                    {ele.operations.map((oper) => (
                                        <ul>
                                            <li>{oper}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                   </div>
                </Slider> 
        </div>
        </>
    )
}
export default Applications;