import { memo } from 'react';

import { IUser } from 'models';

import { UsersTableRow } from './UsersTableRow';

interface IUsersTableProps {
  users: IUser[];
  onRemove: (id: number) => void;
  onEdit: (user: IUser) => void;
}

function UsersTableComponent({ users, onRemove, onEdit }: IUsersTableProps) {
  return (
    <>{
      users.map(u => (
        <UsersTableRow
          key={u.id}
          user={u}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

export const UsersTable = memo(UsersTableComponent);
