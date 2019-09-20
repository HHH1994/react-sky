import * as React from 'react';
import { Alert }  from '@/components/src/index.tsx';

console.log(Alert);

function AlertDemo(props) {

  return (
    <div className='pp-demo-box'>

      <div className='button-demos-box' style={{ width: '90%', margin: '0 auto', 'padding': '20px' }}>
        
        <Alert
          title='提示'
          info='吕肥肥，你该吃饭了'
          btnList={
            [
              {
                name: '确定',
                event: () => {
                  alert(123);
                }
              },
              {
                name: '取消',
                event: () => {
                  alert(456);
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