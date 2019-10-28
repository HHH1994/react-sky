import * as React from 'react';
import { Switch, Button } from '@/components/src/index.tsx';

const styl1 = {
  width: '80%',
  margin: '50px auto'
};

function SwicthDemo(props) {

  const parentRef = React.useRef();
  const parentRef1 = React.useRef();

  return (
    <div className='pp-demo-box'>

      <br />
      
      <Switch
        ref={parentRef}
        value={true}
      ></Switch>

      <br/>

      <Switch
        ref={parentRef1}
        value={false}
      ></Switch>

      <br />

      <Switch
        readonly={true}
      ></Switch>


      <div style={ styl1 }>
        <Button click={function () {alert((`第一个开关的状态是${(parentRef.current as any).val}`)} }>点我告诉你</Button>
      </div>

      <div style={styl1}>
        <Button click={function () { alert((`第二个开关的状态是${(parentRef1.current as any).val}`)} }>点我告诉你</Button>
      </div>
    </div>
  );
}

export default SwicthDemo;
