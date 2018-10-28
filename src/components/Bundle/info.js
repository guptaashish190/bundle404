import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <div className="info" >
        <img src="/images/right.png" alt="design" className="header1" />
        <img src="/images/left.png" alt="design" className="header2" />
        <h1>What are G-secs?</h1>
        <p>A government security (G-Sec) is a debt obligation of the Indian government to fund their fiscal deficit. These instruments are tradable and are issued either by the central or the state government. These can be classified as :-</p>
        <div className="box-container">
          <div className="box" >
            <h2>T-Bills</h2>
            <p>T-bills are money market short term debt instruments which are issued by the central government in three tenures mainly 91-day, 182-day and 364-day.</p>
          </div>
          <div className="box" >
            <h2>Bonds</h2>
            <p>A government bond or sovereign bond is a bond issued by a national government, generally with a promise to pay periodic interest payments and to repay the face value on the maturity date.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Info;
