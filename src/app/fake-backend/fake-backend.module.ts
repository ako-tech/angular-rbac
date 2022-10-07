import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { FakeBackendService } from './fake-backend.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HttpBackend,
      useClass: FakeBackendService,
    },
  ],
})
export class FakeBackendModule {}
