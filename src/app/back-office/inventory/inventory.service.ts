import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryItem } from './inventory.interface';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<InventoryItem[]> {
    return this.httpClient.get<InventoryItem[]>('inventory');
  }
}
