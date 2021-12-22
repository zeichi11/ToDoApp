import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

interface propsType {

}

function AppRouter(props: propsType): JSX.Element {
  return (
    <Routes>
      <Route path="/" />
      <Route path="board" />
      <Route path="user" />
      <Route path="signIn" />
      <Route path="signUp" />
      <Route path="about" />
    </Routes>
  );
}

export default AppRouter;