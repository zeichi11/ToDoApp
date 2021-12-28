import React from 'react';
import CSS from 'csstype';
import Column from '../../component/Column';
import { ColumnType } from '../../types/';

interface propsType {

}

function BoardContent(props: propsType): JSX.Element {
  const boardWrapperCSS: CSS.Properties = {
    'display': 'flex',
    'flexFlow': 'row nowrap',
    'width': '100%', 
    'height': 'auto', 
    'border': '1px solid #a1a1a1', 
    'boxSizing': 'border-box'
  };
  const columns: ColumnType[] = [
    {
      id: 'col1',
      title: 'column1',
      cardList: [
        {
          id: 'col1ca1',
          name: '1card1',
          desc: 'card1 test1',
          dueDate: '21-12-30'
        },
        {
          id: 'col1ca2',
          name: '1card2',
          desc: 'card2 test2',
          dueDate: '21-12-30'
        },
        {
          id: 'col1ca3',
          name: '1card3',
          desc: 'card3 test3',
          dueDate: '21-12-30'
        },
        {
          id: 'col1ca4',
          name: '1card4',
          desc: 'card4 test4',
          dueDate: '21-12-30'
        }
      ]
    },
    {
      id: 'col2',
      title: 'column2',
      cardList: [
        {
          id: 'col2ca1',
          name: '2card1',
          desc: 'card1 test1',
          dueDate: '21-12-30'
        },
        {
          id: 'col2ca2',
          name: '2card2',
          desc: 'card2 test2',
          dueDate: '21-12-30'
        },
        {
          id: 'col3ca3',
          name: '2card3',
          desc: 'card3 test3',
          dueDate: '21-12-30'
        },
      ]
    },
    {
      id: 'col3',
      title: 'column3',
      cardList: []
    }
  ]

  const renderColumns = () => {
    return columns.map((column, index) => {
      return (
        <Column 
          key={index}
          colId={column.id}
          title={column.title}
          cardList={column.cardList}
        />
      );
    });
  }

  return (
    <>
      <div className="board-wrapper" style={boardWrapperCSS}>
        {renderColumns()}
      </div>
    </>
  );
}

export default BoardContent;