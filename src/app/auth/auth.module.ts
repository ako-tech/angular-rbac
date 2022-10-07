import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowForRolesDirective } from './directives/show-for-roles.directive';

@NgModule({
  declarations: [LoginComponent, ShowForRolesDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [LoginComponent, ShowForRolesDirective],
})
export class AuthModule {}
