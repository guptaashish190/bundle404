import React from 'react';

class Small extends React.Component {
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
        <div className="small-card" style={{ display: this.state.status === 'loaded' ? 'grid' : 'none' }} >
          <div className="heading">
            {this.props.heading}
          </div>
          <div className="content">
            {this.props.content}
          </div>
          <div className="subline">
            {this.props.subline}
          </div>
          <div className="knowmore" onClick={() => this.props.onSelect(this.props.type)} >
            Know More
          </div>
        </div>
      );
    }
}

export default Small;
