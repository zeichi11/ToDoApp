import React from 'react';
import Header from './container/Header'
import Content from './container/Content';
import Footer from './container/Footer';

import { Routes, Route, Link } from 'react-router-dom';
import Home from './page/Home';
import User from './page/User';
import Board from './page/Board';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import About from './page/About';

interface propsType {

}

function Main(props: propsType): JSX.Element {
  return (
    <div>
        
        {/* <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="board" element={ <Board/> }/>
          <Route path="user" element={ <User/> }/>
          <Route path="/signIn" element={ <SignIn/> }/>
          <Route path="/signUp" element={ <SignUp/> }/>
          <Route path="/about" element={ <About/> }/>
        </Routes> */}
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default Main;