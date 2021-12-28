import React from 'react';
import CSS from 'csstype';

interface propsType {

}

function BoardHeader(props: propsType): JSX.Element {
  const boardHeaderCSS: CSS.Properties = {
    'width': '100%', 
    'height': '45px', 
    'border': '1px solid #000000', 
    'boxSizing': 'border-box'
  };

  return (
    <>
      <div className="board-header" style={boardHeaderCSS}>
      </div>
    </>
  );
}

export default BoardHeader;