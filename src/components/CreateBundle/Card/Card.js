import React from 'react';
import classnames from 'classnames';
import Small from './Small';
import Expanded from './Expanded';

class Card extends React.Component {
  render() {
    const cn = classnames({
      card: true,
      expand: this.props.type === this.props.selected,
      shrink: this.props.type !== this.props.selected && this.props.selected !== '',
    });
    return (
      <div className={cn} >
        { this.props.selected === '' || this.props.selected !== this.props.type ? <Small {...this.props} /> : <Expanded {...this.props} />}

        <div className="close" style={{ display: this.props.selected !== '' && this.props.type === this.props.selected ? 'block' : 'none' }} onClick={() => this.props.onCloseExpand()} />

      </div>
    );
  }
}

export default Card;
