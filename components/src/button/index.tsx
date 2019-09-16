import * as React from 'react';
import './index.styl';

interface Props {
  theme?: string,
  text: any,
  disabled: boolean,
  children: any,
  click?: React.EventHandler<React.MouseEvent>
}

function Button(props: Props) {
  const { theme='primary', disabled=true, children } = props;

  return (
    <div className='pp-button' onClick={ disabled ? props.click : function() {}}>
      <div className={`pp-${theme}`}>
        {children}
      </div>
    </div>
  );
}

export default Button;