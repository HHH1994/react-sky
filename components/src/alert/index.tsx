import * as React from 'react';
import './index.styl';

interface Props {
  
  // 标题
  title?: string, 

  // 内容
  info?: any,

  // 按钮组(最多2个)
  btnList: []

}

function Alert(props: Props) {

  const { title, info, btnList } = props;

  return(
    <div className='pp-alert'>
      <div className='content-box'>
        <div className='title'>{title}</div>
        <div className='info'>{info}</div>
        <div className={btnList && btnList.length > 1 ? 'btn-box pp-one-line buttonNum-2' : 'btn-box pp-one-line'}>
          {
            btnList && btnList.map((item, index) => {
              return (
                <div className='btn-item' onClick={item.event}>{item.name}</div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Alert;

