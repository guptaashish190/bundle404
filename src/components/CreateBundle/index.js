import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Axios from 'axios';
import shortid from 'shortid';
import Card from './Card/Card';
import Invest from './InvestScreen';

class CreateBundle extends React.Component {
    state = {
      selected: '',
      bundleenable: false,
      queries: '',
      bundles: [],
      investScreen: false,
      medBundle: [],
    }


      onSelect = (type) => {
        this.setState({
          selected: type,
        }, () => {
          console.log(this.state);
        });
      }

      onCloseExpand = () => {
        this.setState({
          selected: '',
        });
      }
      getCards = ({ data }) => {
        if (data.Bundle) {
          return data.Bundle.map((elem) => {
            let mp = elem.maturity_period;
            let yod = 'Days';
            if (mp / 365 > 1) {
              mp /= 365;
              yod = 'Years';
            }
            return (
              <div key={shortid.generate()} className="bundle-item" >
                <div className="heading">{elem.name}</div>
                <div className="circles">
                  <div className="circle">
                    <div>{elem.returns}%</div>
                    <div>Annual Returns</div>
                  </div>
                  <div className="circle">
                    <div>{mp}</div>
                    <div>{yod}</div>
                  </div>
                </div>
                <div className="allocation">
                  <div className="label">{elem.b_allocation}%</div>
                  <div className="bar">
                    <div style={{ width: `${elem.b_allocation}%` }}>
                      <span>Bonds</span>
                    </div>
                    <div style={{ width: `${elem.t_allocation}%` }}>
                      <span>T-Bills</span>
                    </div>
                    <div className="label">{elem.t_allocation}%</div>
                  </div>
                </div>
                <div className="button">
                  <button onClick={() => this.setState({ investScreen: true })}>Invest Now</button>
                </div>
              </div>
            );
          });
        }
        return <div />;
      }

      getCardsMed = () => {

      }


      getCardsMedList = () => this.state.medBundle.map(elem => (
        <div key={shortid.generate()} className="bundle-item" >
          <div className="heading">{elem.name}</div>
          <div className="circles">
            <div className="circle">
              <div>{elem.returns}%</div>
              <div>Annual Returns</div>
            </div>
            <div className="circle">
              <div>{elem.maturity_period}</div>
              <div>Years</div>
            </div>
          </div>
          <div className="allocation">
            <div className="label">{elem.b_alloc}%</div>
            <div className="bar">
              <div style={{ width: `${elem.b_alloc}%` }}>
                <span>Bonds</span>
              </div>
              <div style={{ width: `${Math.round(elem.t_alloc)}%` }}>
                <span>T-Bills</span>
              </div>
              <div className="label">{Math.round(elem.t_alloc)}%</div>
            </div>
          </div>
          <div className="button">
            <button onClick={() => this.setState({ investScreen: true })}>Invest Now</button>
          </div>
        </div>
      ))

      getOverallCards = () => {
        if (!this.state.bundleenable && !this.state.bundlemed) {
          return (
            <div className="card-container">
              <Card
                heading="Starter"
                content="Browse though our preset bundles"
                img="/images/starter.png"
                img1="/images/starter (1).png"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="starter"
                onCloseExpand={this.onCloseExpand}
                enableBundle={this.enableBundle}
              />
              <Card
                heading="Intermediate"
                content="Add a goal and get a suggested bundle"
                img="/images/intermediate.png"
                img1="/images/intermediate (1).png"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="mediocre"
                onCloseExpand={this.onCloseExpand}
                enableBundle={this.enableBundle}
              />
              <Card
                heading="Expert"
                content="Fine tune and customize to create your own bundle"
                img="/images/expert.png"
                img1="/images/expert (1).png"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="experienced"
                onCloseExpand={this.onCloseExpand}
                enableBundle={this.enableBundle}
              />
            </div>
          );
        } else if (this.state.bundleenable) {
          return (
            <Query query={this.state.queries} >
              {data => (
                <div className="bundle-cards">
                  {this.getCards(data)}
                </div>
                  )}
            </Query>);
        } else if (this.state.bundlemed) {
          return (
            <div className="bundle-cards">
              {this.getCardsMedList()}
            </div>
          );
        }
        return '';
      }
      closeInvestScreen = () => {
        this.setState({
          investScreen: false,
        });
      }


      enableBundle = (type, opts) => {
        console.log(type);

        if (type === 'mediocre') {
          const date = new Date(opts.targetdate);

          const dateString = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
          const data = {
            _type: 'custom',
            amount: opts.amount,
            investment_amount: opts.investamount,
            target_date: dateString,
          };

          Axios.post('http://104.211.212.99:8000/goals/new/', data).then((res) => {
            console.log(res.data.bundle[0], res.data.bundle[0].name, 'yesh');
            this.setState({
              bundlemed: true,
              bundleenable: false,
              medBundle: res.data.bundle,
            });
          });
        } else {
          this.setState({
            bundleenable: true,
            queries: gql`
              {
                  Bundle{
                      returns
                      name
                      b_allocation
                      t_allocation
                      maturity_period
                  }
              }
            `,
          });
        }
      }

      render() {
        return (
          <div className="create-bundle-container">
            {this.getOverallCards()}
            {this.state.investScreen ? <Invest closeInvestScreen={this.closeInvestScreen} /> : '' }

          </div>
        );
      }
}

export default CreateBundle;
