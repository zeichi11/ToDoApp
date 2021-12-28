import React from 'react';
import { BoardContent, BoardMenu } from './board/';
import CSS from 'csstype';

interface propsType {

}

function Board(props: propsType): JSX.Element {
  return (
    <>
      <BoardMenu/>
      <BoardContent/>
    </>
  );
}

export default Board;