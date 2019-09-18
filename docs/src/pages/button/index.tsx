import * as React from 'react';
// import mdText from './Readme';

// console.log(mdText);

function Button(props) {
  return (
    <div className='content-box'>

      <div className='iframe-box'>
        <iframe className='iframe-item' src={`http://127.0.0.1:8083/#${props.location.pathname}`}></iframe>
      </div>

      <div className='markdown-box'>
        <iframe src='http://127.0.0.1:8082/components/src/button/Readme.md'></iframe>
      </div>
    </div>
  );
}

export default Button;
