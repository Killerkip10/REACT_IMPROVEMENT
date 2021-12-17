import { memo } from 'react';

import { INews } from 'models';
import { Spinner } from 'components/Spinner';

import { NewsTable } from './NewsTable';

interface INewsProps {
  isFetching: boolean;
  news: INews[];
}

export function NewsComponent({ isFetching, news }: INewsProps) {
  if (isFetching) {
    return <Spinner />;
  }

  return (
    <>
      <NewsTable news={news} />
    </>
  );
}

export const News = memo(NewsComponent);
