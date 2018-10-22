import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return(
      <section>
        <h1>Hello World</h1>
      </section>
    );
  }
}

export default withRouter(Home);
