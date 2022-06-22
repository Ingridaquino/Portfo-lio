import styles from './Projects.module.css';

import bookstan from '../assets/bookstan.svg';
import squirtle from '../assets/squirtle.svg';
import addRemove from '../assets/addandremo.svg';
import ballebot from '../assets/ballebot.svg';
import tabuleiro from '../assets/tabuleiro.svg';
import buscador from '../assets/buscador.svg';


import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ComponentProject } from './ComponentProject';


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className={styles.containerPro}>
        <h2> Projetos </h2>
        <Slider {...settings} className={styles.slider}>
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
              img={addRemove}
              link={'https://github.com/Ingridaquino/add-remove'}
              projeto={'ToDo List'}      
          />

          <ComponentProject 
              img={ballebot}
              link={'https://ingridaquino.github.io/balle-bot/'}
              projeto={'BalleBot'}      
          />

          <ComponentProject 
              img={buscador}
              link={'https://frabjous-marzipan-5fc57e.netlify.app'}
              projeto={'Buscador CEP'}      
          />
          
          <ComponentProject 
              img={tabuleiro}
              link={'https://github.com/Ingridaquino/tabuleiro-next'}
              projeto={'Tabuleiro'}      
          />

          
          {/* <ComponentProject 
              img={bookstan}
              link={'https://book-stan.netlify.app/'}
              projeto={'Matching-game'}      
          /> */}
        </Slider>
      </div>
    );
  }
}


