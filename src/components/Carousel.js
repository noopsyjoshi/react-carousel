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
      speed: 500,
      autoplay: true
    };
    return (

      <Slider {...settings}>
        <div>
          <div className="card">1</div>
        </div>
        <div>
          <div className="card">2</div>
        </div>
        <div>
        <div className="card">3</div>
      </div>
      <div>
        <div className="card">4</div>
      </div>
      <div>
      <div className="card">5</div>
      </div>
      <div>
        <div className="card">6</div>
      </div>
    </Slider>
    );
  }
}

export default Carousel;
