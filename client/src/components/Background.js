import React from 'react';
import '../css/bg.css';

let Background = props => {
  let backgroundImage = {
    backgroundImage: `linear-gradient(rgba(0,0,0,${props.darken}), rgba(0,0,0,${props.darken})), url('${props.src}')`
  };
  return (
    <div className="bg" style={backgroundImage}>{props.children}</div>
  );
};

export {Background};