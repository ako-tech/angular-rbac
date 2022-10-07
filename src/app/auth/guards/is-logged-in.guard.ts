import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(): Observable<boolean | UrlTree> {
    return this.authService.isLoggedIn$.pipe(
      map((isLoggedIn) => isLoggedIn || this.router.createUrlTree(['/login']))
    );
  }
}
