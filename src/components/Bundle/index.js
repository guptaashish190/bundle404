import React from 'react';
import Welcome from './welcome';
import Data from './data';
import Graph from './graph';
import Create from './create';
import Info from './info';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Data />
        <Info />
        <Graph />
        <Create />
      </div>
    );
  }
}

export default Intro;
