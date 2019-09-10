import React from 'react';
// import './index.styl';

function Button(props) {
  return (
    <div className='pp-button' onClick={props.onClick}>{props.text}</div>
  );
}

export default Button;