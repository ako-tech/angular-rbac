import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { TranslateOrderStatusPipe } from './translate-status.pipe';

const routes = [{ path: '', component: OrdersComponent }];
@NgModule({
  declarations: [OrdersComponent, TranslateOrderStatusPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OrdersModule {}
