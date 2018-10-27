import React from 'react';
import Card from './Card/Card';

class CreateBundle extends React.Component {
    state = {
      selected: '',
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

      render() {
        return (
          <div className="create-bundle-container">
            <div className="card-container">
              <Card
                heading="Starter"
                content="Browse though our preset bundles"
                subline="Select this if you are fucked"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="starter"
                onCloseExpand={this.onCloseExpand}
              />
              <Card
                heading="Mediocre"
                content="Browse though our preset bundles"
                subline="Select this if you are fucked"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="mediocre"
                onCloseExpand={this.onCloseExpand}
              />
              <Card
                heading="Experienced"
                content="Browse though our preset bundles"
                subline="Select this if you are fucked"
                onSelect={this.onSelect}
                selected={this.state.selected}
                type="experienced"
                onCloseExpand={this.onCloseExpand}
              />
            </div>
          </div>
        );
      }
}

export default CreateBundle;
