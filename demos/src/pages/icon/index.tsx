import * as React from 'react';
import './index.styl';
import { Icon } from '@/components/src/index.tsx';

function IconDemo(props) {
  return (
    <div className='pp-demo-box'>

      <div className='icon-demos-box' style={{ width: '90%', margin: '0 auto', 'padding': '20px' }}>
        <div className='item'>
          <Icon
            type='add'
          ></Icon>
          <Icon
            type='add'
            color='red'
          ></Icon>
          <Icon
            type='add'
            color='red'
            width='50'
            height='50'
          ></Icon>
        </div>

        <div className='item'>
          <Icon
            type='arrow'
          ></Icon>
          <Icon
            type='arrow'
            color='blue'
          ></Icon>
          <Icon
            type='arrow'
            color='blue'
            width='50'
            height='50'
          ></Icon>
        </div>

        <div className='item'>
          <Icon
            type='collection'
          ></Icon>
          <Icon
            type='collection'
            color='green'
          ></Icon>
          <Icon
            type='collection'
            color='green'
            width='50'
            height='50'
          ></Icon>
        </div>

        <div className='item'>
          <Icon
            type='shopCar'
          ></Icon>
          <Icon
            type='shopCar'
            color='pink'
          ></Icon>
          <Icon
            type='shopCar'
            color='pink'
            width='50'
            height='50'
          ></Icon>
        </div>

        <div className='item'>
          <Icon
            type='location'
          ></Icon>
          <Icon
            type='location'
            color='yellow'
          ></Icon>
          <Icon
            type='location'
            color='yellow'
            width='50'
            height='50'
          ></Icon>
        </div>

      </div>

    </div>
  );
}
export default IconDemo;