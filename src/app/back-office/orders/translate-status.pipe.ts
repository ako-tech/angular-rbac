import { Pipe, PipeTransform } from '@angular/core';
import { OrderStatus } from './order.interface';

@Pipe({
  name: 'translateOrderStatus',
})
export class TranslateOrderStatusPipe implements PipeTransform {
  transform(status: OrderStatus): any {
    switch (status) {
      case 'Cancelled':
        return 'Cancelado';
      case 'Delivered':
        return 'Entregado';
      case 'InDelivery':
        return 'En Reparto';
      case 'InPreparation':
        return 'En Preparación';
      case 'InTransit':
        return 'En Tránsito';
      case 'Pending':
        return 'Pendiente';
      case 'Prepared':
        return 'Preparado';
    }

    return status;
  }
}
