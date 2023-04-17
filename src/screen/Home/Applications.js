import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from './ApplicationsData';
import './Applications.scss'

const Applications = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px",
        arrows: true
    };

    return (
        <>
            <div className="applications">
                <div className="title">
                    Applications
                </div>
                <Slider
                    {...settings}
                    className='sliderContainer'
                >

                    {
                        React.Children.toArray(data.map((ele) => (
                            <>
                                <div className='applicationContent'>
                                    <img src={ele.image} className='appImg' alt="appImg" />
                                    <div className="applicationContainer">

                                        <div className="applicationBG">
                                            <div className="applicationName">
                                                {ele.name}
                                            </div>
                                            <div className="desc">
                                                {ele.desc}
                                            </div>
                                            <div>
                                                <div className="operations">Operations</div>
                                                {ele.operations.map((oper, index) => (
                                                    <ul key={index}>
                                                        <li>{oper}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>


                        )))
                    }

                </Slider>
            </div>
        </>
    )
}
export default Applications;