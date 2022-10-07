import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ako-back-office-layout',
  templateUrl: './back-office-layout.component.html',
  styleUrls: ['./back-office-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackOfficeLayoutComponent {
  constructor() {}
}
