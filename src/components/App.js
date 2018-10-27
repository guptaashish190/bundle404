import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './Bundle/index';
import Welcome from './Bundle/welcome';
import CreateBundle from './CreateBundle';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Intro} />
          <Route exact path="/create" component={CreateBundle} />
        </div>
      </Router>
    );
  }
}

export default App;
