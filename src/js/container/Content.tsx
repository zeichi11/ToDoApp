import React from 'react';
import AppRouter from '../router/Router';

interface propsType {

}

function Content(props: propsType): JSX.Element {
  return (
    <div className="content" style={{'borderCollapse': 'collapse'}}>
      <AppRouter/>
    </div>
  );
}

export default Content;