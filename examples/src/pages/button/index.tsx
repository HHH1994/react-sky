import * as React from 'react';
import Button from '@/components/src/button/index.tsx';

function ButtonDemo(props) {
  return (
    <div className='pp-demo-box'>
      <Button text='这是一个按钮' onClick={() => {alert(1234)}}></Button>
    </div>
  );
}
export default ButtonDemo;