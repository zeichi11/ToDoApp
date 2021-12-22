import React from 'react';
import Header from './container/Header'
import Content from './container/Content';
import Footer from './container/Footer';

interface propsType {

}

function Main(props: propsType): JSX.Element {
  return (
    <>
        <Header/>
        <Content/>
        <Footer/>
    </>    
  );
}

export default Main;