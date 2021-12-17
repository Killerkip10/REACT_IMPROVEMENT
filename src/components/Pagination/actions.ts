export const CHANGE_PAGE = '[PAGINATION]: change page';
export const CHANGE_AMOUNT = '[PAGINATION]: change amount';
export const CHANGE_TOP = '[PAGINATION]: change top';
export const RESET = '[PAGINATION]: reset';

export const changePageAction = (page: number) => ({
  type: CHANGE_PAGE,
  payload: { page },
});

export const changeTopAction = (top: number) => ({
  type: CHANGE_TOP,
  payload: { top },
});

export const changeAmountAction = (amount: number) => ({
  type: CHANGE_AMOUNT,
  payload: { amount },
})

export const resetAction = () => ({
  type: RESET,
});

export type Actions = ReturnType<
  typeof changePageAction
  | typeof changeAmountAction
  | typeof changeTopAction
>;
