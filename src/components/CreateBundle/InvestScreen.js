import React from 'react';
import $ from 'jquery';

class Invest extends React.Component {
    state = {
      success: false,
    }

    onSubmit= () => {
      this.setState({
        success: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            success: false,
          });
          this.props.closeInvestScreen();
        }, 1300);
      });
    }
    render() {
      return (
        <div className="invest-screen-container">
          <div className="input"> Rs. <input type="text" /></div>
          <button onClick={() => this.onSubmit()}>Invest</button>
          {
              this.state.success ?
                <div className="check-cont">
                  <div className="check_mark">
                    <div className="sa-icon sa-success animate">
                      <span className="sa-line sa-tip animateSuccessTip" />
                      <span className="sa-line sa-long animateSuccessLong" />
                      <div className="sa-placeholder" />
                      <div className="sa-fix" />
                    </div>
                  </div>
                </div> :
          ''
          }

        </div>
      );
    }
}

export default Invest;
