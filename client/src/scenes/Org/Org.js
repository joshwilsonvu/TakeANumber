import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Org extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="offset-sm-2 col-sm-8 mt-3">
        <h2>{this.props.name}</h2>
        <hr/>
      </div>
    );
  }
}

Org.propTypes = {
  name: PropTypes.string.isRequired
};

export {Org};