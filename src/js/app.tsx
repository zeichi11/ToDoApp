import ReactDom from 'react-dom';
import React from 'react';
import Index from './src/js/index';

const wrapper: HTMLElement | null = document.querySelector('#wrapper');




type propsType = {

}

if (wrapper) {
  ReactDom.render(Index, wrapper);
}



function test(props: propsType): JSX.Element {
  return (
    <div>
    </div>
  );
}



export {};