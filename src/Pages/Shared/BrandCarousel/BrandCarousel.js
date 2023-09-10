import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../assets/brands/img1.jpg';
import img2 from '../../../assets/brands/img2.png';


const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block w-100' src={ img1 } alt='First Slide' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block w-100' src={ img2 } alt='First Slide' />
            </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;