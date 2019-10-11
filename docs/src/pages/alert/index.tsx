import * as React from 'react';

function Alert(props) {
  return (
    <div className='content-box'>

      <div className='iframe-box'>
        <iframe className='iframe-item' src={`https://lvpangpang.github.io/react-sky/demos/dist/index.html#${props.location.pathname}`}></iframe>        
      </div>

      <div className='markdown-box'>
        <iframe src='http://127.0.0.1:8081/components/src/alert/Readme.md'></iframe>
      </div>
    </div>
  );
}

export default Alert;
