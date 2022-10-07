import { createSuccesfulResponse } from '../helpers';
import { FakeHandler } from './fake-handler.interface';

const inventoryDb = [
  {
    sku: 'UN120473',
    productName: 'Gorra de Béisbol',
    stock: 250,
    imageSrc: 'cap.jpg',
  },
  {
    sku: 'WM982746',
    productName: 'Pantalones Mujer',
    stock: 92,
    imageSrc: 'woman-pants.jpg',
  },
  {
    sku: 'WM665321',
    productName: 'Camiseta Mujer',
    stock: 177,
    imageSrc: 'woman-tshirt.jpg',
  },
  {
    sku: 'MN998374',
    productName: 'Pantalones Hombre',
    stock: 87,
    imageSrc: 'man-pants.jpg',
  },
  {
    sku: 'MN102938',
    productName: 'Camiseta Hombre',
    stock: 120,
    imageSrc: 'man-tshirt.jpg',
  },
  {
    sku: 'SH263645',
    productName: 'Zapatillas Verdes',
    stock: 15,
    imageSrc: 'nike-green.jpg',
  },
  {
    sku: 'SH268765',
    productName: 'Zapatillas Gris',
    stock: 9,
    imageSrc: 'nike-grey.jpg',
  },
  {
    sku: 'WM002347',
    productName: 'Zapatos de Tacón',
    stock: 27,
    imageSrc: 'heels.jpg',
  },
];

export const inventoryHandlers: FakeHandler[] = [
  {
    match: (req) => req.url === 'inventory' && req.method === 'GET',
    handle: () => {
      return createSuccesfulResponse(inventoryDb);
    },
  },
];
