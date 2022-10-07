import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>('accounting/transactions');
  }
}
