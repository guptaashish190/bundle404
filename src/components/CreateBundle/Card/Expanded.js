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
      } else if (this.props.selected === 'starter') {
        this.props.enableBundle(this.props.type);
      }
      if (this.state.form === true) {
        if (this.props.type === 'mediocre') {
          this.props.enableBundle(this.props.type, {
            date: this.state.date,
            amount: this.state.amount,
          });
        } else {
          this.props.enableBundle(this.props.type, {
            date: this.state.date,
            amount: this.state.amount,
          });
        }
      }
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
        <div className="fund" >
          <span>Bonds</span>
          <div className="pill" >
            <span>T-Bills</span>
          </div>
        </div>
        <p>Fund Allocation</p>
      </div>
    )
    amountchange = (value) => {
      this.setState({
        amount: value,
      });
    }

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

      detail = () => {
        if (this.props.selected === 'starter') {
          return (<div className="exp"><div className="heading"><h3>New to investing?</h3><h3>Confused?</h3></div>
            <div className="context">Browse through our curated preset bundles, to choose an investment strategy. </div>
                  </div>);
        } else if (this.props.selected === 'mediocre') {
          return (<div className="exp"><div className="heading"><h3>Already planned for a goal?</h3><h3>Want to pile up some money?</h3></div>
            <div className="context">Add a goal and get tailor-made bundles by our intelligent suggestion algorithm </div>
                  </div>);
        }
        return (<div className="exp"><div className="heading"><h3>Are you a pro?</h3><h3>Want to control everything?</h3></div>
          <div className="context">Fine tune every parameter to control the way how your fund is invested. Fully customize and create your own bundle' </div>
                </div>);
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
              <div className="img">
                <img src={this.props.img1} alt="" />
              </div>
            </div>
            <div className="right-panel">
              <div className="content">
                {!this.state.form && this.detail()}
                {this.state.form && this.props.selected === 'mediocre' && this.formdata()}
                {this.state.form && this.props.selected === 'experienced' && this.experienceddata()}
              </div>
              <div className="button">
                <button onClick={() => this.checktype()}>{this.state.form === true && this.props.selected === 'experienced' ? 'Place Order' : 'Browse Bundles'}</button>
              </div>
            </div>
          </div>
        );
      }
}

export default Expanded;
