import React from 'react';
import AppRouter from '../router/Router';

interface propsType {

}

function Content(props: propsType): JSX.Element {
  return (
    <div className="content">
      <AppRouter/>
      content
    </div>
  );
}

export default Content;