import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';

const routes = [{ path: '', component: InventoryComponent }];

@NgModule({
  declarations: [InventoryComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InventoryModule {}
