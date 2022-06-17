import styles from './Projects.module.css';
import bookstan from '../assets/bookstan.svg';
import squirtle from '../assets/squirtle.svg';




import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComponentProject } from './ComponentProject';
import { Code } from 'phosphor-react';

export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  
  
  return (
    <div className={styles.containerPro}>
        <h2><Code size={32}/> Projetos</h2>

        <Slider {...settings} className={styles.slider}>
            <ComponentProject 
                img={bookstan}
                link={'https://book-stan.netlify.app/'}
                projeto={'Bookstan'}
                
            />

            <ComponentProject 
                img={squirtle}
                link={'https://squirtle-ong.netlify.app'}
                projeto={'Squirtle'}
                
            />

            <ComponentProject 
                img={bookstan}
                link={'https://book-stan.netlify.app/'}
                projeto={'Bookstan'}
                
            />

            <ComponentProject 
                img={squirtle}
                link={'https://squirtle-ong.netlify.app'}
                projeto={'Squirtle'}
                
            />


        </Slider>
    </div>
  );
}