import * as React from 'react';
import { useState } from 'react';
import { Button, Alert }  from '@/components/src/index.tsx';

function AlertDemo(props) {
  const [show, setShow] = useState(false);

  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{ width: '90%', margin: '0 auto', 'padding': '20px' }}>

        <Button click={() => setShow(!show)}>alert测试</Button>
        
        <Alert
          show={show}
          title='提示'
          info='吕肥肥，你该吃饭了'
          btnList={
            [
              {
                name: '点赞',
                event: () => {
                  console.log('吕肥肥');
                }
              },
              {
                name: '取消点赞',
                event: () => {
                  console.log('王大熊');
                }
              }
            ]
          }
        ></Alert>
      </div>

    </div>
  );
}
export default AlertDemo;