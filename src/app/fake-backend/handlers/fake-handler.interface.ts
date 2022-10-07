import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FakeHandler {
  match: (req: HttpRequest<any>) => boolean;
  handle: (req: HttpRequest<any>) => Observable<HttpEvent<any>>;
}
