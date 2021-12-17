import { IUser } from 'models';
import { UserRoleEnum } from 'constant';

import {
  Actions,
  CREATE_USER,
  EDIT_USER,
  REMOVE_USER,
} from './actions';

export interface IUsersState {
  usersList: IUser[];
  userId: number;
}

const initialState: IUsersState = {
  userId: 4,
  usersList: [
    {
      id: 1,
      name: 'Vlad',
      surname: 'Pinchuk',
      email: '11@gmail.com',
      role: UserRoleEnum.Admin,
    },
    {
      id: 2,
      name: 'Killerkip',
      surname: 'Drakon',
      email: '22@gmail.com',
      role: UserRoleEnum.Editor,
    },
    {
      id: 3,
      name: 'Dima',
      surname: 'Pinchuk',
      email: '33@mail.com',
      role: UserRoleEnum.User,
    },
  ],
};

export const users = (state = initialState, { type, payload }: Actions) => {
  switch(type) {
    case CREATE_USER:
      return {
        ...state,
        // @ts-ignore
        usersList: [...state.usersList, { ...payload.user, id: state.userId }],
        userId: state.userId + 1,
      };
    case EDIT_USER:
      return {
        ...state,
        // @ts-ignore
        usersList: state.usersList.map(u => u.id === payload.user.id ? { ...u, ...payload.user } : u),
      };
    case REMOVE_USER:
      return {
        ...state,
        // @ts-ignore
        usersList: state.usersList.filter(u => u.id !== payload.id),
      };
    default:
      return state;
  }
}
