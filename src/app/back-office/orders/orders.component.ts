import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrdersService } from './orders.service';

@Component({
  selector: 'ako-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  orders$ = this.ordersService.getAll();

  constructor(private ordersService: OrdersService) {}
}
