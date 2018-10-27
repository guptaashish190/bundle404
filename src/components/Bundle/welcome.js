import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <button>Sign In</button>
        <h1>Bundle</h1>
        <div className="underline" />
        <span>Tailored Hybrid Investments in Government Securities</span>
        <div className="scrolldown">
          <p>Scroll Down</p>
          <img src="/images/down-arrow.svg" alt="scroll-arrow" />
        </div>
        <img src="/images/top.png" alt="design" className="top-img" />
        <img src="/images/right.png" alt="design" className="design-img" />
        <img src="/images/left.png" alt="design" className="design1-img" />
      </div>
    );
  }
}

export default Welcome;
