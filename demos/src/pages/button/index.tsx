import * as React from 'react';
import { Button } from '@/components/src/index.tsx';

function ButtonDemo(props) { 
  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{width: '90%', margin: '0 auto', 'padding': '20px' }}> 
        <Button disabled click={() => alert('disabled')}>disabled</Button>
        <br />
        <Button>primary</Button>
        <br />
        <Button theme='success' click={() => { alert('success') }}>{<div>success</div>}</Button>
        <br />
        <Button theme='warning' click={() => { alert('warning') }}>warning</Button>
        <br />
        <Button theme='error' click={() => { alert('error') }}>
          <div>这是嵌套的error</div>
        </Button>
      </div>
      
    </div>
  );
}
export default ButtonDemo;