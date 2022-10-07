import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '../auth/auth.module';

import { BackOfficeLayoutComponent } from './back-office-layout/back-office-layout.component';
import { BackOfficeRoutingModule } from './back-office-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserSelectorComponent } from './header/user-selector/user-selector.component';

@NgModule({
  declarations: [
    BackOfficeLayoutComponent,
    HeaderComponent,
    UserSelectorComponent,
  ],
  imports: [CommonModule, BackOfficeRoutingModule, AuthModule],
})
export class BackOfficeModule {}
