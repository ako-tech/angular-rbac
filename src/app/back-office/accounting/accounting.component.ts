import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TransactionsService } from './transactions';

@Component({
  selector: 'ako-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountingComponent {
  transactions$ = this.transactionsService.getAll();

  constructor(private transactionsService: TransactionsService) {}
}
