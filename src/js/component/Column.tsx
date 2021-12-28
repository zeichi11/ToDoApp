import React from 'react';
import CSS from 'csstype';

interface propsType {

}

function Column(props: propsType): JSX.Element {
  const columnCSS: CSS.Properties = {
    'width': '300px',
    'height': '1200px',
    'boxSizing': 'border-box',
    'border': '1px solid #000000',
    'margin': '20px 0px 20px 30px'
  }

  return (
    <div className="column" style={columnCSS}>
    </div>
  );
}

export default Column;