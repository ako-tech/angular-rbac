import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountingComponent } from './accounting.component';

const routes = [{ path: '', component: AccountingComponent }];

@NgModule({
  declarations: [AccountingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountingModule {}
