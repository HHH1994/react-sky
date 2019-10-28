import * as React from 'react';
import { useRef, useImperativeHandle, forwardRef } from 'react';
import './index.styl';

interface Props {

  // 当前值
  value?: true | false,

  // 是否只读
  readonly?: false

}

function Switch(props: Props, parentRef:any) {
  const { value, readonly } = props;

  const ref = useRef();

  const [ val, setVal ] = React.useState(value);

  // 在这个里面可以向父组件暴露信息
  useImperativeHandle(parentRef, () => {
    return {
      val
    }
  })
  const click = () => {
    if (!readonly) {
      setVal(!val);
    }
  };
  return(
    <div ref={ref} className={readonly ? 'pp-switch pp-switch-disabled' : (val ? 'pp-switch pp-switch-true' : 'pp-switch') } onClick={click}>
      <div className={val ? 'move move-true' : 'move' }>{value}</div>
    </div>
  );
} 

export default forwardRef(Switch);