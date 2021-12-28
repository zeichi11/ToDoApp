import Card from './Card';

interface Column {
  id: string;
  title: string;
  cardList: Card[];
}

export default Column;