import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class dashboardService {
  private apiUrl = 'http://localhost:3000/cards';

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
}
