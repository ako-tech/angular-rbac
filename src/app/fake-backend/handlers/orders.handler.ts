import { createSuccesfulResponse } from '../helpers';
import { FakeHandler } from './fake-handler.interface';

const ordersDb = [
  {
    id: '1187745',
    orderDate: '2022-09-12',
    clientName: 'Frank',
    itemsCount: 5,
    total: 250.45,
    status: 'Delivered',
  },
  {
    id: '1187746',
    orderDate: '2022-09-12',
    clientName: 'Chloe',
    itemsCount: 1,
    total: 19.99,
    status: 'InDelivery',
  },
  {
    id: '1187747',
    orderDate: '2022-09-14',
    clientName: 'Joe',
    itemsCount: 3,
    total: 150,
    status: 'Cancelled',
  },
  {
    id: '1187748',
    orderDate: '2022-09-15',
    clientName: 'Mary',
    itemsCount: 10,
    total: 650.87,
    status: 'Prepared',
  },
  {
    id: '1187749',
    orderDate: '2022-09-20',
    clientName: 'John',
    itemsCount: 1,
    total: 99.99,
    status: 'InDelivery',
  },
  {
    id: '1187750',
    orderDate: '2022-09-21',
    clientName: 'Becca',
    itemsCount: 3,
    total: 176.95,
    status: 'Pending',
  },
  {
    id: '1187751',
    orderDate: '2022-09-21',
    clientName: 'Anna',
    itemsCount: 8,
    total: 578.55,
    status: 'Pending',
  },
  {
    id: '1187752',
    orderDate: '2022-09-23',
    clientName: 'Cathy',
    itemsCount: 2,
    total: 120.5,
    status: 'Pending',
  },
];

export const ordersHandlers: FakeHandler[] = [
  {
    match: (req) => req.url === 'orders' && req.method === 'GET',
    handle: () => {
      return createSuccesfulResponse(
        ordersDb.sort((a, b) => (a.id > b.id ? -1 : 1))
      );
    },
  },
];
