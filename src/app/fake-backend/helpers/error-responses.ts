import {
  HttpErrorResponse,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { delay, of, switchMap, throwError } from 'rxjs';

//401
export function unauthorizedErrorResponse(
  req: HttpRequest<any>,
  errMsg?: string
) {
  return createErrorResponse({
    error: errMsg ?? `Unauthorized`,
    status: HttpStatusCode.Unauthorized,
    statusText: 'Unauthorized',
    url: req.url,
  });
}
//403
export function forbiddenErrorResponse(req: HttpRequest<any>, errMsg?: string) {
  return createErrorResponse({
    error: errMsg ?? `Forbidden`,
    status: HttpStatusCode.Forbidden,
    statusText: 'Forbidden',
    url: req.url,
  });
}
//404
export function notFoundErrorResponse(req: HttpRequest<any>) {
  return createErrorResponse({
    error: `Ruta no existe`,
    status: HttpStatusCode.NotFound,
    statusText: 'Not Found',
    url: req.url,
  });
}

function createErrorResponse(init: {
  error?: string;
  status?: HttpStatusCode;
  statusText?: string;
  url?: string;
}) {
  return of(null).pipe(
    delay(300),
    switchMap(() => throwError(() => new HttpErrorResponse(init)))
  );
}
