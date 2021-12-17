import { memo, useCallback } from 'react';

import { IUser } from 'models';
import { modal, IModal } from 'components/Modal';

import { UsersCreateForm } from './UsersCreateForm';
import { UsersTable } from './UsersTable';

interface IUsersProps extends IModal {
  users: IUser[];
  onRemove: (id: number) => void;
  onEdit: (user: IUser) => void;
  onCreate: (user: IUser) => void;
}

export function UsersComponent({ users, onRemove, onEdit, onCreate, onOpenModal }: IUsersProps) {
  const handleOpenEditUserModal = useCallback(
    (user: IUser) => onOpenModal({ user, onSave: onEdit }),
    [onOpenModal, onEdit],
    );

  const handleOpenCreateUserModal = useCallback(
    () => onOpenModal({ onSave: onCreate }),
    [onOpenModal, onCreate],
    );

  return (
    <div>
      <div>
        <button onClick={handleOpenCreateUserModal}>Add User</button>
      </div>

      <UsersTable
        users={users}
        onRemove={onRemove}
        onEdit={handleOpenEditUserModal}
      />
    </div>
  );
}

export const Users = memo(modal(UsersComponent, UsersCreateForm));
