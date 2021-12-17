import { memo } from 'react';

import { INews } from 'models';
import { PaginationContainer } from 'components/Pagination';

import { NewsTableRow } from './NewsTableRow';
import { NewsTableHeader } from './NewsTableHeader';
import './NewsTable.scss';

interface INewsTableProps {
  news: INews[];
}

function NewsTableComponent({ news }: INewsTableProps) {
  return (
    <div className="table">
      <div>
        <NewsTableHeader />
        {news.map(n => (
          <NewsTableRow
            key={n.id}
            news={n}
          />
        ))}
      </div>
      <PaginationContainer />
    </div>
  )
}

export const NewsTable = memo(NewsTableComponent);
