import React from 'react';
import Slider from 'react-slick';
// import NextArrow from './NextArrow';
// import PrevArrow from './PrevArrow';

class Carousel extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '33%',
      slidesToShow: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            className: 'breakpoint1',
            arrows: false,
            centerMode: true,
            centerPadding: '25%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 980,
          settings: {
            className: 'breakpoint2',
            arrows: false,
            centerMode: true,
            centerPadding: '20%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            className: 'breakpoint3',
            arrows: false,
            centerMode: true,
            centerPadding: '15%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            className: 'breakpoint4',
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 300,
          settings: {
            className: 'breakpoint6',
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            slidesToShow: 1
          }
        }
      ]
    };

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
              <h4>View Itinerary</h4>
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
              <h4>View Itinerary</h4>
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
              <h4>View Itinerary</h4>
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
              <h4>View Itinerary</h4>
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
              <h4>View Itinerary</h4>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
