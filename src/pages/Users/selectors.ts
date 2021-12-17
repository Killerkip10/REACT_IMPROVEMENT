import { createSelector } from 'reselect';

import { IStore } from 'store';

export const getUsers = (state: IStore) => state.users;

export const getUsersListSelector = createSelector(
  getUsers,
  users => users.usersList,
);
