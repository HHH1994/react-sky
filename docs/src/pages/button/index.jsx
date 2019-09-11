import React from 'react';
import mdText from '@/components/src/button/Readme.md';

function Button(props) {
  return (
    <div className='content-box'>
      说明文档
      {/* {window.md.render('32131321')} */}
      <div className='iframe-box'>
        <iframe className='iframe-item' src={`http://127.0.0.1:8082/#${props.location.pathname}`}></iframe>
      </div>
    </div>
  );
}

export default Button;
