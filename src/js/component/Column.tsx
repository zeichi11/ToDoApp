import React from 'react';
import CSS from 'csstype';
import { CardType } from '../types/';
import Card from './Card';


interface propsType {
  colId: string;
  title: string;
  cardList: CardType[];
}

function Column(props: propsType): JSX.Element {
  const columnCSS: CSS.Properties = {
    'width': '300px',
    'height': '1200px',
    'boxSizing': 'border-box',
    'border': '1px solid #a1a1a1',
    'borderRadius': '10px',
    'margin': '20px 0px 20px 25px',
    'padding': '0px 10px 0px 10px'
  }

  const renderCardList = (cardList: CardType[]) => {
    const cardListCSS: CSS.Properties = {
      'listStyle': 'none',
      'margin': '10px 0px 10px 0px',
      'padding': '0px'
    };
    return (
      <ul className="card-list" style={cardListCSS}>
        {cardList.map((card: CardType, index: number) => {
          return <Card
            key={ index }
            cardId={ card.id }
            name={ card.name }
            desc={ card.desc }
            dueDate={ card.dueDate }
          />
        })}
      </ul>
    )
  }

  return (
    <div className="column" style={columnCSS}>
      <div>
        <h4>{props.title}</h4>
      </div>
      <div>
        {renderCardList(props.cardList)}
      </div>
    </div>
  );
}

export default Column;