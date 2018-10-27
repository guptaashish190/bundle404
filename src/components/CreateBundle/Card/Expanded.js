import React from 'react';

class Expanded extends React.Component {
    state = {
      status: 'loading',
    }
    componentWillMount = () => {
      this.interval = setInterval(() => {
        this.setState({
          status: 'loaded',
        });
      }, 400);
    }
    componentWillUnmount = () => {
      clearInterval(this.interval);
    }
    render() {
      return (
        <div className="expanded-card" style={{ display: this.state.status === 'loaded' ? 'grid' : 'none' }}>
          <div className="left-panel">
            <div className="heading">
              {this.props.heading}
            </div>
            <div className="content">
              {this.props.content}
            </div>
          </div>
          <div className="right-panel">
            <div className="content">
          If you want to modify the appClass from a child component such as Welcome which is further down in your application then you will need to use a state management like Redux or Flux to modify the className from a child component otherwise it will get messy fast.
            </div>
            <div className="button">
              <button>Browse Bundles</button>
            </div>
          </div>
        </div>
      );
    }
}

export default Expanded;
