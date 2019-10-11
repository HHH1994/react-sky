import * as React from 'react';

function Button(props) {
  return (
    <div className='content-box'>

      <div className='iframe-box'>
        <iframe className='iframe-item' src={`${(window as any).serverName}${props.location.pathname}`}></iframe>       
      </div>

      <div className='markdown-box'>
        <iframe src='http://127.0.0.1:8081/components/src/button/Readme.md'></iframe>
      </div>
    </div>
  );
}

export default Button;
