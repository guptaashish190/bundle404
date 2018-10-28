import React from 'react';
import { withRouter } from 'react-router-dom';

class Create extends React.Component {
    create = () => {
      this.props.history.push('/create');
    }

    render() {
      return (
        <div className="createpage">
          <img src="/images/right.png" alt="design" className="header1" />
          <img src="/images/left.png" alt="design" className="header2" />
          <button onClick={this.create}>Let's Get Started</button>
          <p>Disclaimer: Bundles are <span>not</span> subject to market risks</p>
        </div>
      );
    }
}

export default withRouter(Create);
