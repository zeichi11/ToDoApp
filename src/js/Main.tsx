import React from 'react';
import Header from './container/Header';
import Body from './container/Body';
import '../css/Main.css';

interface propsType {

}

function Main(props: propsType): JSX.Element {
  return (
    <>
        <Header/>
        <Body/>
    </>
  );
}

export default Main;