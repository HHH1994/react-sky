import * as React from 'react';
import pageJson from './pageJson.js';
import { Link } from 'react-router-dom';

function PageList(props) {

  const renderList = () => {
    return pageJson && Object.keys(pageJson).map((item, index) => {
      return (
        <div className='list-item'>
          <div className='item-header'>{item}</div>
          <div className='item-con'>
            {
              pageJson[item].map((item1, index1) => {
                return (
                  <Link className='item' to={`/${item1}`}>{item1}</Link>
                );
              })
            }
          </div>
        </div>
      );
    });
  };
  
  return (
    <div className='page-list-box'>
      <header className='h1'>react-sky</header>
      <div className='list-box'>{renderList()}</div>
    </div>
  );
}

export default PageList;
