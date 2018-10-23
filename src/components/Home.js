import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Carousel from './Carousel';

class Home extends React.Component {

  render() {
    return(
      <section>
        <h1>Our Charter Destinations</h1>
        <Carousel />
        <a href="#" className="viewAllDestinationsLink">View all destinations</a>
      </section>
    );
  }
}

export default withRouter(Home);
