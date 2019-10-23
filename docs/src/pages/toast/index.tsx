import * as React from 'react';

function Toast(props) {
  const name = props.location.pathname;
  return (
    <div className='content-box'>

      <div className='iframe-box'>
        <iframe className='iframe-item' src={`${(window as any).serverName}${name}`}></iframe>

      </div>

      <div className='markdown-box'>
        <iframe src={`http://127.0.0.1:8081/components/src/${name}/Readme.md`}></iframe>
      </div>
    </div>
  );
}

export default Toast;
