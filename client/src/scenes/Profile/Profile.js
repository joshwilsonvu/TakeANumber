import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Org} from "../Org/Org";

class Profile extends Component {
  render(props) {
    return (
      <div className="offset-sm-2 col-sm-8 mt-3">
        <h2>Hello from Profile!</h2>
      </div>
    );
  }
}

Org.propTypes = {
  primary_email: PropTypes.string.isRequired
};

export { Profile };