import React from 'react';
import Welcome from './welcome';
import Data from './data';
import Graph from './graph';
import Create from './create';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Data />
        <Graph />
        <Create />
      </div>
    );
  }
}

export default Intro;
