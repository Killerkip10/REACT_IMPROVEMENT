import { INews } from 'models';

import {
  Actions,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
} from './actions';

export interface INewsState {
  isFetching: boolean;
  newsList: INews[];
}

const initialState: INewsState = {
  isFetching: false,
  newsList: [],
};

export const news = (state = initialState, { type, payload }: Actions) => {
  switch (type) {
    case GET_NEWS_REQUEST:
    case GET_NEWS_SUCCESS:
    case GET_NEWS_FAILURE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
