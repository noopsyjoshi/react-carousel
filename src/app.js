import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import Home from './components/Home';

// Styles
import './scss/style.scss';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick-theme.scss';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
