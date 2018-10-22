import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.Component {
  render() {
    const settings = {
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      speed: 500
    };
    return (
      <Slider {...settings}>
        <div className="card">
          <img src="../assets/turtle.png" />
          <div className="card-text">
            <h2>Cuba</h2>
            <h3>Bahamas & Caribbean</h3>
            <h4>View Itinerary</h4>
          </div>
        </div>
        <div className="card">
          <img src="../assets/turtle.png" />
          <div className="card-text">
            <h2>Florida</h2>
            <h3>Bahamas & Caribbean</h3>
            <h4>View Itinerary</h4>
          </div>
        </div>
        <div className="card">
          <img src="../assets/turtle.png" />
          <div className="card-text">
            <h2>Croatia</h2>
            <h3>Mediteranean</h3>
            <h4>View Itinerary</h4>
          </div>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
