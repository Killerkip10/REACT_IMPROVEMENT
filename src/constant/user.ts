export enum UserRoleEnum {
  Admin,
  Editor,
  User,
}

export const UserRoleName = {
  [UserRoleEnum.Admin]: 'Admin',
  [UserRoleEnum.Editor]: 'Editor',
  [UserRoleEnum.User]: 'User',
}

export const UserRoleOptions = [
  { value: UserRoleEnum.User, name: UserRoleName[UserRoleEnum.User] },
  { value: UserRoleEnum.Editor, name: UserRoleName[UserRoleEnum.Editor] },
  { value: UserRoleEnum.Admin, name: UserRoleName[UserRoleEnum.Admin] },
];
