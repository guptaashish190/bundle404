import React from 'react';
import Calendar from 'react-calendar';

class Expanded extends React.Component {
    state = {
      status: 'loading',
      form: false,
      date: new Date(),
      amount: null,

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
    onChange = date => this.setState({ date })
    checktype = () => {
      if (this.props.selected === 'mediocre' || this.props.selected === 'experienced') {
        this.setState({
          form: true,
        });
      }
    }

    amountchange = (value) => {
      this.setState({
        amount: value,
      });
    }

    experienceddata = () => (
      <div className="formcontent">
        <h2>Create Your Bundle</h2>
        <div className="select">
          <div className="option">
            <h3>T-Bills</h3>
            <p>Select no. of days</p>
            <input type="range" />
          </div>
          <div className="option">
            <h3>Bonds</h3>
            <p>Select no. of years</p>
            <input type="range" />
          </div>
        </div>
        <div className="data">
          <h2>Amount :</h2>
          <input />
        </div>
      </div>
    )
    formdata = () => (
      <div className="formcontent"><h2>Select Your Goal</h2>
        <div className="imagepanel">
          <div className="imagerow">
            <div className="box">
              <img src="/images/1st box.png" alt="" />
            </div>
            <div className="box">
              <img src="/images/2nd car.png" alt="" />
            </div>
            <div className="box">
              <img src="/images/3rd box.png" alt="" />
            </div>
            <div className="box">
              <img src="/images/4th box.png" alt="" />
            </div>
          </div>
        </div>
        <div className="field">
          <h4>Goal Amount :</h4>
          <input onChange={e => this.amountchange(e.target.value)} />
        </div>
        <h3>Target Date</h3>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>)

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
              {!this.state.form && 'If you want to modify the appClass from a child component such as Welcome which is further down in your application then you will need to use a state management like Redux or Flux to modify the className from a child component otherwise it will get messy fast.'}
              {this.state.form && this.props.selected === 'mediocre' && this.formdata()}
              {this.state.form && this.props.selected === 'experienced' && this.experienceddata()}
            </div>
            <div className="button">
              <button onClick={() => this.checktype()}>Browse Bundles</button>
            </div>
          </div>
        </div>
      );
    }
}

export default Expanded;
