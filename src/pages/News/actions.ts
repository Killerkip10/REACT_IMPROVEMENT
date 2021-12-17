import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { INews } from 'models';
import { IStore } from 'store';
import { PATH } from 'configs';
import { changeAmountAction } from 'components/Pagination';

export const GET_NEWS_REQUEST = '[NEWS]: get news request';
export const GET_NEWS_SUCCESS = '[NEWS]: get news success';
export const GET_NEWS_FAILURE = '[NEWS]: get news failure';

export const getNewsRequestAction = () => ({
  type: GET_NEWS_REQUEST,
  payload: { isFetching: true },
});

export const getNewsSuccessAction = (newsList: INews[]) => ({
  type: GET_NEWS_SUCCESS,
  payload: { isFetching: false, newsList },
});

export const getNewsFailureAction = () => ({
  type: GET_NEWS_FAILURE,
  payload: { isFetching: false },
});

export type Actions = ReturnType<
  typeof getNewsRequestAction
  | typeof getNewsSuccessAction
  | typeof getNewsFailureAction
  | typeof changeAmountAction
>;



type ThunkResult<T> = ThunkAction<T, IStore, undefined, Actions>;

export const getNewsAction = (): ThunkResult<void> => (dispatch) => {
  dispatch(getNewsRequestAction());

  axios(PATH.NEWS)
    .then(({ data }) => {
      dispatch(getNewsSuccessAction(data.items));
      dispatch(changeAmountAction(data.items.length));
    })
    .catch(() => dispatch(getNewsFailureAction()));
};
