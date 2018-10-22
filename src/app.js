import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import Home from './components/Home';

// Styles
import './scss/style.scss';

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
