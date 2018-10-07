import React, {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <svg viewBox="0 0 100 100">
          <polygon points="0,0 100,0 100,50 0,60" fill="green"/>
        </svg>
      </header>
    );
  }
}

export { Header };