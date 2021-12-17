import { memo, useCallback } from 'react';

import { Typography } from 'components/Typography';
import { IUser } from 'models';
import { UserRoleName } from 'constant';

interface IUsersTableRowProps {
  user: IUser;
  onEdit: (user: IUser) => void;
  onRemove: (id: number) => void;
}

function UsersTableRowComponent({ user, onEdit, onRemove }: IUsersTableRowProps) {
  const handleEdit = useCallback(() => onEdit(user), [onEdit, user]);

  const handleRemove = useCallback(() => onRemove(user.id), [onRemove, user]);

  return (
    <div>
      <div><Typography>{user.name}</Typography></div>
      <div><Typography>{user.surname}</Typography></div>
      <div><Typography>{user.email}</Typography></div>
      <div><Typography>{UserRoleName[user.role]}</Typography></div>
      <div>
        <button onClick={handleEdit}><Typography>Edit</Typography></button>
        <button onClick={handleRemove}><Typography>Remove</Typography></button>
      </div>
    </div>
  );
}

export const UsersTableRow = memo(UsersTableRowComponent);

