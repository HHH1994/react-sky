import * as React from 'react';

function PageList(props) {

  return (
    <React.Fragment>
      {
        props.children
      }
    </React.Fragment>
  );
}

export default PageList;
