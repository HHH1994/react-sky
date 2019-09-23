import * as React from 'react';
import { useState } from 'react';
import './index.styl';

interface Props {

  // 是否显示（默认为否）
  show: boolean,
  
  // 标题
  title?: string, 

  // 内容
  info?: any,

  // 按钮组(最多2个)
  btnList: []

}

function Alert(props: Props) {

  const { show, title, info, btnList } = props;

  const [showPop, setShowPop] = useState(false);

  const hideEvent = (event) => {
    if (event) {
      event();
    }
    (false);
  };

  return(
    <div className='pp-alert'>
      <div className='content-box'>
        <div className='title'>{title}</div>
        <div className='info'>{info}</div>
        <div className={btnList && btnList.length > 1 ? 'btn-box pp-one-top-line buttonNum-2' : 'btn-box pp-one-top-line'}>
          {
            btnList && btnList.slice(0, 2).map((item, index) => {
              return (
                <div className={index === 0 ? 'btn-item' : 'btn-item pp-one-left-line'} onClick={item.event}>{item.name}</div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Alert;

