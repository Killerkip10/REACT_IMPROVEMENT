import {
  Actions,
  CHANGE_PAGE,
  CHANGE_AMOUNT,
  CHANGE_TOP,
  RESET,
} from './actions';

export interface IPaginationState {
  skip: number;
  top: number;
  amount: number;
}

const initialState: IPaginationState = {
  skip: 0,
  top: 5,
  amount: 0,
};

export const pagination = (state = initialState, { type, payload }: Actions) => {
  switch (type) {
    case CHANGE_AMOUNT:
      return {
        ...state,
        ...payload,
      };
    case CHANGE_TOP:
      return {
        ...state,
        ...payload,
        skip: 0,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        // @ts-ignore
        skip: state.top * (payload.page - 1),
      };
    case RESET:
      return { ...initialState };
    default:
      return state;
  }
};
