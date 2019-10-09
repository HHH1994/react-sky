import * as React from 'react';

function Icon(props) {
  return (
    <div className='content-box'>

      <div className='iframe-box'>
        <iframe className='iframe-item' src={`http://127.0.0.1:8083/#${props.location.pathname}`}></iframe>
      </div>

      <div className='markdown-box'>
        <iframe src='http://127.0.0.1:8081/components/src/icon/Readme.md'></iframe>
      </div>
    </div>
  );
}

export default Icon;