import { Role } from './roles.type';

export interface User {
  username: string;
  role: Role;
}

export interface UserWithToken extends User {
  token: string;
}
