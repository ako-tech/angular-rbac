import { createSuccesfulResponse } from '../helpers';
import { FakeHandler } from './fake-handler.interface';

const transactionsDb = [
  {
    id: '87GTH875',
    date: '2022-09-24',
    fromTo: 'Catherine Smith',
    description: 'Order-1187752',
    amount: 120.5,
  },
  {
    id: '76TGC899',
    date: '2022-09-23',
    fromTo: 'Walker Apparel',
    description: 'SH263645 Restock',
    amount: -3200,
  },
  {
    id: '66PTO374',
    date: '2022-09-22',
    fromTo: 'Anna Adams',
    description: 'Order-1187751',
    amount: 578.55,
  },
  {
    id: '09UYT652',
    date: '2022-09-22',
    fromTo: 'Rebecca Wilson',
    description: 'Order-1187750',
    amount: 176.95,
  },
  {
    id: '66YNC435',
    date: '2022-09-21',
    fromTo: 'John Harris',
    description: 'Order-1187749',
    amount: 99.99,
  },
];

export const accountingHandlers: FakeHandler[] = [
  {
    match: (req) =>
      req.url === 'accounting/transactions' && req.method === 'GET',
    handle: () => {
      return createSuccesfulResponse(transactionsDb);
    },
  },
];
