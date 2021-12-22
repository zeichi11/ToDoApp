import ReactDom from 'react-dom';
import React from 'react';

const wrapper: HTMLElement | null = document.querySelector('#wrapper');
type propsType = {

}

if (wrapper) {
  ReactDom.render(Index, wrapper);
}