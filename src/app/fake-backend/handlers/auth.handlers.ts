import { createSuccesfulResponse } from '../helpers';
import { unauthorizedErrorResponse } from '../helpers/error-responses';
import { FakeHandler } from './fake-handler.interface';

const usersDb = [
  {
    username: 'bob',
    password: '1234',
    role: 'Orders',
  },
  {
    username: 'alice',
    password: '1234',
    role: 'Inventory',
  },
  {
    username: 'john',
    password: '1234',
    role: 'Accounting',
  },
  {
    username: 'sarah',
    password: '1234',
    role: 'Manager',
  },
];

export const authHandlers: FakeHandler[] = [
  {
    match: (req) => req.url === 'login' && req.method === 'POST',
    handle: (req) => {
      const { username, password } = req.body;
      const user = usersDb.find(
        (userFromDb) =>
          userFromDb.username === (username as string).toLocaleLowerCase() &&
          userFromDb.password === password
      );

      return user
        ? createSuccesfulResponse(safeUserInfo(user))
        : unauthorizedErrorResponse(req, 'Invalid Credentials');
    },
  },
];

function safeUserInfo(user: any) {
  const userClone = { ...user };
  delete userClone.password;

  return window.btoa(JSON.stringify(userClone));
}
