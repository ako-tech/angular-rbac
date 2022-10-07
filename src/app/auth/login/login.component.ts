import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, EMPTY, finalize } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginCredentials } from '../model';

@Component({
  selector: 'ako-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  processingRequest = false;

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  login() {
    this.processingRequest = true;

    this.authService
      .login(this.form.value as LoginCredentials)
      .pipe(
        finalize(() => (this.processingRequest = false)),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.handleUnauthorized();
            return EMPTY;
          }

          throw error;
        })
      )
      .subscribe();
  }

  handleUnauthorized() {
    this.form.setErrors({ invalidCredentials: true });
    this.cdr.markForCheck();
  }
}
