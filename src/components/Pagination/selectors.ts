import { createSelector } from 'reselect';

import { IStore } from 'store';

export const getPagination = (state: IStore) => state.pagination;

export const getSkipSelector = createSelector(
  getPagination,
  pagination => pagination.skip,
);

export const getTopSelector = createSelector(
  getPagination,
  pagination => pagination.top,
);

export const getCurrentPageSelector = createSelector(
  getPagination,
  (pagination) => {
    if (pagination.skip) {
      return Math.floor(pagination.skip / pagination.top) + 1;
    }

    return 1;
  },
)

export const getLastPageSelector = createSelector(
  getPagination,
  pagination => Math.ceil(pagination.amount / pagination.top),
)

export const getRowsPerPageSelector = createSelector(
  [getPagination, getCurrentPageSelector, getLastPageSelector],
  (pagination, currentPage, lastPage) => {
    if (currentPage === lastPage) {
      const rowAmount = pagination.amount % pagination.top;

      return rowAmount ? rowAmount : pagination.top;
    }

    return pagination.top;
  }
);
