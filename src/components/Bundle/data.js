import React from 'react';

class Data extends React.Component {
  render() {
    return (
      <div className="data">
        <img src="/images/right.png" alt="design" className="header1" />
        <img src="/images/left.png" alt="design" className="header2" />
        <div className="item">
          <h1>Why invest in Government Securities ?</h1>
          <p>Better returns than bank FDs, guaranteed by the Govt. of India</p>
        </div>
        <div className="card-containers">
          <div className="card">
            <img src="/images/risk.png" alt="risk" />
            <div className="text">
              <span>Risk Free</span>
              <span className="details">Guaranteed and totally safe return</span>
            </div>
          </div>
          <div className="card">
            <img src="/images/growth.png" alt="risk" />
            <div className="text">
              <span>Better Returns</span>
              <span className="details">Higher interest rate than FD's</span>
            </div>
          </div>
          <div className="card">
            <img src="/images/piggy-bank.png" alt="risk" />
            <div className="text">
              <span>No TDS</span>
              <span className="details">No tax reduction at source like bank FDs</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
