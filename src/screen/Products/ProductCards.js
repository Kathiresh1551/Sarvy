import React from "react";
import Slider from "react-slick";
import data from './ProductCardsData';
import './ProductCards.scss';

const ProductCards = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <>
            <div className="ProductCardsContainer">
            <Slider {...settings} className="productSlider">
                {
                    data.map((ele, ind) => (
                        <>
                            <div className="cardImg">
                                <div className="productImage">
                                    <img src={ele.image} />
                                </div>
                                <div className="productCount">
                                    <div className="productNo">
                                            Product {ind + 1}
                                        </div>
                                    </div>
                                </div>
                                <div className="productNolable">
                                
                                <div className="productNoLabel">
                                    <div className="productCards">
                                        <div className="productDescCard">
                                            {ele.desc}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </>
                    ))
                }
                
            </Slider>
            </div>
        </>
    )
}
export default ProductCards;