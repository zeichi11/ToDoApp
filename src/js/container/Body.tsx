import React from 'react';
import Content from './Content';
import Footer from './Footer';

interface propsType {

}

function Body(props: propsType): JSX.Element {
  return (
    <>
      <Content/>
      <Footer/>
    </>
  );
}

export default Body;