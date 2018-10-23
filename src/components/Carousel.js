import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: 0,
      slidesToShow: 3,
      // autoplay: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
      <Slider {...settings}>
          <div className="card">
            <img src="./assets/turtle.png" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <h4>View Itinerary</h4>
          </div>
        </div>
        <div>
          <div className="card">
            <img src="./assets/turtle.png" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <h4>View Itinerary</h4>
            </div>
          </div>
        </div><div>
          <div className="card">
            <img src="./assets/turtle.png" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <h4>View Itinerary</h4>
            </div>
          </div>
        </div><div>
          <div className="card">
            <img src="./assets/turtle.png" />
            <div className="card-text-top">
              <h2>Cuba</h2>
              <h3>Bahamas & caribbean</h3>
            </div>
            <div className="card-text-bottom">
              <h4>View Itinerary</h4>
            </div>
          </div>
        </div><div>
          <div className="card">
            <img src="./assets/turtle.png" />
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
