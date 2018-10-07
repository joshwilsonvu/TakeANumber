import React, {Component} from 'react';
import {Background} from '../../components/Background';
import {BgBlock} from '../../components/BgBlock';
import Img from '../../img/img1-1920x1280.jpg';
import Logo from "../../img/logo_512x512.png";
import {Header} from "./components/Header";

class Landing extends Component {
  render() {
    return (
      <div>
        <section>
          <Background src={Img} darken={0}>
            <div className="pure-g-r root">
              <div className="pure-u-sm-1-6">&nbsp;</div>
              <div className="pure-u-sm-2-3">
                <BgBlock color="rgba(255,255,255,0.9)">
                  <h2>This is my website!</h2>
                  <p><i>I'm gonna do even more things like rounded corners.</i></p>
                  <a href="https://www.github.com/joshwilsonvu/TakeANumber.git">Source</a>
                </BgBlock>
              </div>
            </div>
          </Background>
        </section>
        <Header/>
      </div>
    );
  }
}

export { Landing };