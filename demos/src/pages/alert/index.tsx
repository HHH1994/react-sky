import * as React from 'react';
import { useState, useRef } from 'react';
import { Button, Alert }  from '@/components/src/index.tsx';

function AlertDemo(props) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const alertRef = useRef(null);

  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{ width: '90%', margin: '0 auto', 'padding': '20px' }}>

        <Button click={() => setShow1(!show1)}>最简单的</Button>

        <br />

        <Button click={() => setShow(!show)}>带回调函数的</Button>

        <br />

        <Button>全局使用</Button>

        <Alert
          show={show1}
          title='提示'
          info='王大熊，你该吃饭了'
          setShow={setShow1}
        ></Alert>

        <Alert
          show={show}
          title='提示'
          info='吕肥肥，你该吃饭了'
          setShow={setShow}
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

        <Alert ref={alertRef}></Alert>
      </div>
    </div>
  );
}
export default AlertDemo;