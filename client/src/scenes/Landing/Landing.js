import React, {Component} from 'react';
import {LandingBody} from './components/LandingBody';

class Landing extends Component {
  render() {
    return (
      <div className="offset-sm-2 col-sm-8 mt-3">
        <LandingBody/>
        Hello from Landing!
      </div>
    );
  }
}

export { Landing };