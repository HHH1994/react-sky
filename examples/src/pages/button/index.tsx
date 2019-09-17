import * as React from 'react';
import Button from '@/components/src/button/index.tsx';

function ButtonDemo(props) { 
  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{width: '90%', margin: '0 auto', 'padding': '20px' }}> 
        <Button text='primary' disabled click={() => alert('disabled')}>disabled</Button>
        <br />
        <Button text='primary'>primary</Button>
        <br />
        <Button theme='success' click={() => { alert('success') }}>{<div>success</div>}</Button>
        <br />
        <Button theme='warning' click={() => { alert('warning') }}>warning</Button>
        <br />
        <Button theme='error' click={() => { alert('error') }}>error</Button>
      </div>
    </div>
  );
}
export default ButtonDemo;