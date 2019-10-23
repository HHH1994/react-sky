import * as React from 'react';
import { useRef } from 'react';
import { Button, Toast } from '@/components/src/index.tsx';

function ToastDemo(props) {

  var toast = null;

  const ref:any = useRef();

  return (
    <div className='pp-demo-box'>

      <div className='toast-demos-box' style={{ width: '90%', margin: '0 auto', 'padding': '20px' }}>
        <Button click={() => { ref.current.set('我是被弹出来的吕肥肥') } }>点我弹出吕肥肥</Button>
        <br/>
        <br />
        <Button click={() => { ref.current.set('我是被弹出来的王大熊') } }>点我弹出王大熊</Button>
        
        <Toast 
          ref={ref}
        ></Toast>
      </div>
    </div>
  );
}

export default ToastDemo;
