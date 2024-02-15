import React from 'react'
import p1 from './About_8_images/div.company-news__logo\ \(1\).png'
import p2 from './About_8_images/div.company-news__logo\ \(2\).png'
import p3 from './About_8_images/div.company-news__logo\ \(3\).png'
import p4 from './About_8_images/div.company-news__logo\ \(4\).png'
import p5 from './About_8_images/div.company-news__logo\ \(5\).png'
import p6 from './About_8_images/div.company-news__logo\ \(6\).png'
import t1 from './About_8_images/imges_SECONG/div.company-news__top.png'
// import t1 from './About_8_images/imges_SECONG/div.company-news__top.png'
import t2 from './About_8_images/imges_SECONG/div.company-news__top\ \(2\).png'
import t3 from './About_8_images/imges_SECONG/div.company-news__top\ \(3\).png'
import t4 from './About_8_images/imges_SECONG/div.company-news__top\ \(1\).png'

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from 'react';


function About_8() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 660);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isVisible]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 660, // Breakpoint for small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>


        </>
    )
}

export default About_8
