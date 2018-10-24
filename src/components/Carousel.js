import React from 'react';
import Slider from 'react-slick';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';

class Carousel extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '32%',
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 980,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 646,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
          }
        }
      ]
    };

    // initially I tried using JS to hide the overlapping items, but then found it was easier to add a style for the attribute 'aria-hidden'

    // function hideSlides() {
    //   // check if it's mobile
    //   const width = document.documentElement.clientWidth;
    //   if( width <= 400 ) {
    //     const slides = document.getElementsByClassName('slick-slide');
    //     console.log(slides); // this returns an object of all elements
    //
    //     // iteratate through the object, check attributes, aria-hidden value is true
    //     // if it's true then set the visibility to hidden
    //   }
    // }

    // hideSlides();

    return (
      <Slider {...settings}>
        <div className="card">
          <img src="./assets/1.jpeg" />
          <div className="card-front">
            <img src="./assets/1.jpeg" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <h4>View Itinerary</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./assets/2.jpeg" />
          <div className="card-front">
            <img src="./assets/2.jpeg" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <a href="#"><h4>View Itinerary</h4></a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./assets/3.jpeg" />
          <div className="card-front">
            <img src="./assets/3.jpeg" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <a href="#"><h4>View Itinerary</h4></a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./assets/4.jpeg" />
          <div className="card-front">
            <img src="./assets/4.jpeg" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <a href="#"><h4>View Itinerary</h4></a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./assets/5.jpeg" />
          <div className="card-front">
            <img src="./assets/5.jpeg" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <a href="#"><h4>View Itinerary</h4></a>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="./assets/6.png" />
          <div className="card-front">
            <img src="./assets/6.png" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <a href="#"><h4>View Itinerary</h4></a>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
