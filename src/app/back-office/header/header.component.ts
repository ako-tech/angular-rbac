import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Role } from 'src/app/auth/model';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/model/user.interface';

@Component({
  selector: 'ako-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  currentUser$ = this.authService.user$;
  users: User[] = [
    {
      username: 'bob',
      role: 'Orders',
    },
    {
      username: 'alice',
      role: 'Inventory',
    },
    {
      username: 'john',
      role: 'Accounting',
    },
    {
      username: 'sarah',
      role: 'Manager',
    },
  ];

  constructor(private authService: AuthService) {}

  loginAsUser(user: User): void {
    this.authService
      .login({
        username: user.username,
        password: '1234',
      })
      .subscribe();
  }
  logout(): void {
    this.authService.logout();
  }
}
