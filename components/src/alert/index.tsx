import * as React from 'react';
import './index.styl';

interface Props {

  // 是否显示（默认为否）
  show: boolean,
  
  // 标题
  title?: string, 

  // 内容
  info?: any,

  // 按钮组(最多2个, 可以没有)
  btnList?: [
    {
      name: string,
      event: () => void;
    }
  ]
}

function Alert(props: Props) {

  const { show, title, info, btnList } = props;

  const [showPop, setShowPop] = React.useState(false);

  React.useEffect(() => {
    setShowPop(show);
  }, [show]);

  // 默认的按钮组数
  let defaultBtnList = [
    {
      name: '确定',
      event: () => {
        setShowPop(false);
      }
    }
  ];

  const hideEvent = (event?: Function) => {
    setShowPop(false);
    if (event) {
      event();
    }
  };

  if (btnList) {
    defaultBtnList = btnList;
  }

  if (!showPop) return null;

  return (
    <div className='pp-alert' ref='ppAlert'>
      <div className='content-box'>
        <div className='title'>{title}</div>
        <div className='info'>{info}</div>
        <div className={btnList && btnList.length > 1 ? 'btn-box pp-one-top-line buttonNum-2' : 'btn-box pp-one-top-line'}>
          {
            defaultBtnList && defaultBtnList.slice(0, 2).map((item, index) => {
              return (
                <div className={index === 0 ? 'btn-item' : 'btn-item pp-one-left-line'} onClick={ () => { hideEvent(item.event) } }>{item.name}</div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}
export default Alert;

