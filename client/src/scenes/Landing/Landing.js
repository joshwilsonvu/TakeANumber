import React, {Component} from 'react';
import {LandingBody} from './components/LandingBody';
import {Background} from '../../components/Background';
import {BgBlock} from '../../components/BgBlock';
import Img from '../../img/img1-1920x1280.jpg';

class Landing extends Component {
  render() {
    return (
      <Background src={Img} darken={0}>
        <div className="pure-g-r root">
          <div className="pure-u-sm-1-6">&nbsp;</div>
          <div className="pure-u-sm-2-3">
            <BgBlock color="rgba(255,255,255,0.9)">
              <h2>Take a Number</h2>
              <p><i>A web tool to manage lines for office hours, events, and more.</i></p>
              <a href="https://www.github.com/joshwilsonvu/TakeANumber.git">Source</a>
            </BgBlock>
          </div>
        </div>
      </Background>
    );
  }
}

export { Landing };