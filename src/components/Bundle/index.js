import React from 'react';
import Welcome from './welcome';
import Data from './data';

class Intro extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Data />
      </div>
    );
  }
}

export default Intro;
