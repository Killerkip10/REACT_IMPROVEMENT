import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { users, IUsersState } from 'pages/Users';
import { news, INewsState } from 'pages/News';
import { pagination, IPaginationState } from 'components/Pagination';

export interface IStore {
  users: IUsersState;
  news: INewsState;
  pagination: IPaginationState;
}

const reducers = combineReducers({
  users,
  news,
  pagination,
});

export const store = createStore(
  reducers,
  compose(applyMiddleware(thunk)),
);
