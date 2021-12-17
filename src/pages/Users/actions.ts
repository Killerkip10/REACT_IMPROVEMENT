import { IUser } from 'models';

export const CREATE_USER = '[USERS]: create user';
export const EDIT_USER = '[USERS]: edit user';
export const REMOVE_USER = '[USERS]: remove user';

export const createUserAction = (user: IUser) => ({
  type: CREATE_USER,
  payload: { user },
});

export const editUserAction = (user: IUser) => ({
  type: EDIT_USER,
  payload: { user },
});

export const removeUserAction = (id: number) => ({
  type: REMOVE_USER,
  payload: { id },
});

export type Actions = ReturnType<
  typeof removeUserAction
  | typeof editUserAction
  | typeof createUserAction
>;
