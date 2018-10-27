import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './Bundle/welcome';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Welcome} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
