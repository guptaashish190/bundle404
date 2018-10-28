import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import shortid from 'shortid';
import Card from './Card/Card';

class CreateBundle extends React.Component {
    state = {
      selected: '',
      bundleenable: false,
      queries: '',
      bundles: [],
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
                  <button>Invest Now</button>
                </div>
              </div>
            );
          });
        }
        return <div />;
      }

      enableBundle = (type) => {
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

      render() {
        return (
          <div className="create-bundle-container">
            {
              !this.state.bundleenable ?
                <div className="card-container">
                  <Card
                    heading="Starter"
                    content="Browse though our preset bundles"
                    subline="Select this if you are fucked"
                    onSelect={this.onSelect}
                    selected={this.state.selected}
                    type="starter"
                    onCloseExpand={this.onCloseExpand}
                    enableBundle={this.enableBundle}
                  />
                  <Card
                    heading="Mediocre"
                    content="Browse though our preset bundles"
                    subline="Select this if you are fucked"
                    onSelect={this.onSelect}
                    selected={this.state.selected}
                    type="mediocre"
                    onCloseExpand={this.onCloseExpand}
                    enableBundle={this.enableBundle}
                  />
                  <Card
                    heading="Experienced"
                    content="Browse though our preset bundles"
                    subline="Select this if you are fucked"
                    onSelect={this.onSelect}
                    selected={this.state.selected}
                    type="experienced"
                    onCloseExpand={this.onCloseExpand}
                    enableBundle={this.enableBundle}
                  />
                </div>
            :
                <Query query={this.state.queries} >
                  {data => (
                    <div className="bundle-cards">
                      {this.getCards(data)}
                    </div>
                  )}
                </Query>
          }

          </div>
        );
      }
}

export default CreateBundle;
