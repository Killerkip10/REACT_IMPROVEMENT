import { UserRoleEnum } from 'constant';

export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: UserRoleEnum;
}
