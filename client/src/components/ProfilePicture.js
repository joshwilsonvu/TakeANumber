import React, {Component} from 'react';

class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.getSrc = this.getSrc.bind(this);
  }

  getSrc() {
    return this.props.src;
  }

  render() {
    return (
      <img src={this.getSrc()} width="128px" alt="Profile Picture" className="border border-primary rounded"/>
    );
  }
}

ProfilePicture.contextTypes = {
  src: React.PropTypes.string.isRequired
};

export {ProfilePicture};