import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from './auth/guards/is-logged-in.guard';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    canLoad: [IsLoggedInGuard],
    loadChildren: () =>
      import('./back-office/back-office.module').then(
        (m) => m.BackOfficeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
