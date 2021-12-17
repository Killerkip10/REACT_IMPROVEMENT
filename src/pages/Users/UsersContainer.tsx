import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IUser } from 'models';

import { getUsersListSelector } from './selectors';
import { removeUserAction, editUserAction, createUserAction } from './actions';
import { Users } from './Users';

export function UsersContainer() {
  const dispatch = useDispatch();
  const removeUser = useCallback((id: number) => dispatch(removeUserAction(id)), [dispatch]);
  const editUser = useCallback((user: IUser) => dispatch(editUserAction(user)), [dispatch]);
  const createUser = useCallback((user: IUser) => dispatch(createUserAction(user)), [dispatch]);

  const users = useSelector(getUsersListSelector);

  return (
    <Users
      users={users}
      onRemove={removeUser}
      onEdit={editUser}
      onCreate={createUser}
    />
  );
}
