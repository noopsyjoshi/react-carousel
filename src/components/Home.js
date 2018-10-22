import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Carousel from './Carousel';

class Home extends React.Component {

  render() {
    return(
      <section>
        <h1>Our Charter Destinations</h1>
        <Carousel />
        <button>View all destinations</button>
      </section>
    );
  }
}

export default withRouter(Home);
