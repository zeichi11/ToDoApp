import React from 'react';
import { BoardContent, BoardHeader } from './board/';
import CSS from 'csstype';

interface propsType {

}

function Board(props: propsType): JSX.Element {
  return (
    <>
      <BoardHeader/>
      <BoardContent/>
    </>
  );
}

export default Board;