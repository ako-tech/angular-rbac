export type OrderStatus =
  | 'Pending'
  | 'InPreparation'
  | 'Prepared'
  | 'InTransit'
  | 'InDelivery'
  | 'Delivered'
  | 'Cancelled';

export interface Order {
  id: string;
  orderDate: string;
  clientName: string;
  itemsCount: number;
  total: number;
  status: OrderStatus;
}
