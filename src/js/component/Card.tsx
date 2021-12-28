import React from 'react';
import CSS from 'csstype';

interface propsType {
  cardId: string;
  name: string;
  desc: string;
  dueDate: string;
}

function Card(props: propsType): JSX.Element {
  const CardCSS: CSS.Properties = {
    'width': '100%',
    'boxSizing': 'border-box',
    'height': 'auto',
    'border': '1px solid #a1a1a1',
    'borderRadius': '10px',
  }
  return (
    <div className="card" style={CardCSS}>
      <div>
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default Card;