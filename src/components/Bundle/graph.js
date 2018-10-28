import React from 'react';

class Graph extends React.Component {
  render() {
    return (
      <div className="graph-page">
        <img src="/images/right.png" alt="design" className="header1" />
        <img src="/images/left.png" alt="design" className="header2" />
        <h1>G-Sec <span className="divide">vs</span><span className="fd"> FD</span> </h1>
        <h2>Yields</h2>
        <img src="/images/Group 27.png" alt="data" className="graphs" />
        <span>*FD Interest rates used for comparision are offered by a leading public sector bank. All yields are annualized.</span>
      </div>
    );
  }
}

export default Graph;
