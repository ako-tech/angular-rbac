import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { User } from 'src/app/auth/model/user.interface';

@Component({
  selector: 'ako-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(click)': 'toggleList()',
    tabindex: '0',
    '(blur)': 'hideList()',
  },
})
export class UserSelectorComponent implements OnInit {
  @Input() users?: User[];
  @Input() currentUser: User | null = null;

  @Output() userChanged = new EventEmitter<User>();

  showList = false;

  constructor() {}

  ngOnInit(): void {}

  changeUser(user: User): void {
    this.userChanged.emit(user);
  }

  toggleList(): void {
    this.showList = !this.showList;
  }

  hideList(): void {
    this.showList = false;
  }
}
