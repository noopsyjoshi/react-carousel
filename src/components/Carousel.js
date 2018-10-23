import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

class Carousel extends React.Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '28%',
      slidesToShow: 1,
      // autoplay: true,
      speed: 500,
      // prevArrow: <PrevArrow />,
      // nextArrow: <NextArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerPadding: '10%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 615,
          settings: {
            centerPadding: '10%',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerPadding: '10px',
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
