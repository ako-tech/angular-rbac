import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeBackendModule } from './fake-backend/fake-backend.module';
import { AuthModule } from './auth/auth.module';
import { authTokeninterceptorProvider } from './auth/interceptors';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FakeBackendModule,
  ],
  providers: [authTokeninterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
