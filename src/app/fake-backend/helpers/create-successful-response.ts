import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { delay, of } from 'rxjs';

export function createSuccesfulResponse<T>(
  results: T,
  statusCode = HttpStatusCode.Ok
) {
  return of(
    new HttpResponse<T>({
      body: results,
      status: statusCode,
      statusText: 'Ok',
    })
  ).pipe(delay(300));
}
