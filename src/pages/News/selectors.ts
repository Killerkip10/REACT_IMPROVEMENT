import { createSelector } from 'reselect';

import { getSkipSelector, getTopSelector } from 'components/Pagination';
import { IStore } from 'store';

export const getNews = (state: IStore) => state.news;

export const getIsFetchingSelectro = createSelector(
  getNews,
  news => news.isFetching,
)

export const getNewsListSelector = createSelector(
  getNews,
  news => news.newsList,
);

export const getNewsListByPagination = createSelector(
  [getNewsListSelector, getSkipSelector, getTopSelector],
  (newsList, skip, top) => newsList.slice(skip, skip + top),
);
