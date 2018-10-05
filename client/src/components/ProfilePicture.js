import React, {Component} from 'react';
import mp from "../img/mp.png";

class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.getSrc = this.getSrc.bind(this);
  }

  getSrc() {
    return mp;
    //return this.props.src;
  }

  render() {
    return (
      <img src={this.getSrc()} alt="Profile" className="pure-img"/>
    );
  }
}

export {ProfilePicture};