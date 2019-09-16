import * as React from 'react';
import Button from '@/components/src/button/index.tsx';

function ButtonDemo(props) { 
  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{width: '90%', margin: '0 auto', 'padding': '20px' }}> 
        <Button text='primary'>primary</Button>
        <br />
        {/* <Button theme='success' text='success' click={() => { alert(1234) }}></Button>
        <br />
        <Button theme='warning' text='warning' click={() => { alert(1234) }}></Button>
        <br />
        <Button theme='error' text='error' click={() => { alert(1234) }}></Button> */}
      </div>
    </div>
  );
}
export default ButtonDemo;