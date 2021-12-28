import React from 'react';
import CSS from 'csstype';

interface propsType {

}

function BoardMenu(props: propsType): JSX.Element {
  const boardHeaderCSS: CSS.Properties = {
    'width': '100%', 
    'height': '45px', 
    'border': '1px solid #a1a1a1', 
    'boxSizing': 'border-box'
  };

  return (
    <>
      <div className="board-header" style={boardHeaderCSS}>
      </div>
    </>
  );
}

export default BoardMenu;