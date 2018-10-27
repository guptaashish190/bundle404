import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Intro from './Bundle/index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Intro} />
        </div>
      </Router>
    );
  }
}

export default App;
