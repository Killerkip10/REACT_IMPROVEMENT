import { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames'

import { UserRoleEnum, UserRoleOptions } from 'constant';
import { IUser } from 'models';
import { IModal } from 'components/Modal';
import { Typography } from 'components/Typography';
import close from 'assets/icons/close_black_24dp.svg';

import './UsersCreateForm.scss';

interface IUsersCreateFormProps extends IModal {
  user?: IUser;
  onCloseModal: () => void;
  onSave: (user: IUser) => void;
}

export function UsersCreateForm({ user, onCloseModal, onSave }: IUsersCreateFormProps) {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    email: '',
    role: UserRoleEnum.User,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    surname: '',
    email: '',
  });

  const handleFormChange = useCallback(
    ({ target: { name, value } }) => setForm({ ...form, [name]: value }),
    [form, setForm],
  );

  const handleFormSave = useCallback(
    () => {
      const errors = {
        name: '',
        surname: '',
        email: '',
      };

      if (!form.name.trim()) {
        errors.name = 'Should not be empty';
      }

      if (!form.surname.trim()) {
        errors.surname = 'Should not be empty';
      }

      if (!form.email.trim()) {
        errors.email = 'Should not be empty';
      }

      if (!RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$').test(form.email.trim())) {
        errors.email = 'Invalid email format';
      }

      setFormErrors(errors);

      if (!Object.values(errors).some(Boolean)) {
        onSave({ ...form, role: Number(form.role) } as IUser);
        onCloseModal();
      }
    },
    [form, setFormErrors, onSave, onCloseModal],
  );

  useEffect(() => user && setForm(user), []);

  return (
    <div className="users-create-form">
      <div className="users-create-form__title">
        <div><Typography weight="weight_500" size="size_16">{user ? 'Edit' : 'Create'}</Typography></div>
        <img src={close} onClick={onCloseModal} alt="" />
      </div>

      <div className="users-create-form__field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={classNames({ 'users-create-form__field_error': formErrors.name })}
          value={form.name}
          onChange={handleFormChange}
        />
        <div><Typography size="size_12" color="red">{formErrors.name}</Typography></div>
      </div>

      <div className="users-create-form__field">
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className={classNames({ 'users-create-form__field_error': formErrors.surname })}
          value={form.surname}
          onChange={handleFormChange}
        />
        <div><Typography size="size_12" color="red">{formErrors.surname}</Typography></div>
      </div>

      <div className="users-create-form__field">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={classNames({ 'users-create-form__field_error': formErrors.email })}
          value={form.email}
          onChange={handleFormChange}
        />
        <div><Typography size="size_12" color="red">{formErrors.email}</Typography></div>
      </div>

      <div className="users-create-form__field">
        <select
          name="role"
          value={form.role}
          onChange={handleFormChange}
        >
          {UserRoleOptions.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
        </select>
      </div>

      <div className="users-create-form__actions">
        <button type="button" onClick={handleFormSave}>Save</button>
        <button type="button" onClick={onCloseModal}>Cancel</button>
      </div>
    </div>
  );
}
