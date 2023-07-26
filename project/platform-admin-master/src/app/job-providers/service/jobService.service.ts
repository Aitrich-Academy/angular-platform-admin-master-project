
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Companies } from '../model/job.model';

@Injectable({
  providedIn: 'root'
})
export class jobService {
  private companiesUrl = 'http://localhost:3000/companies'; // Change the URL if your JSON Server is running on a different port.

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Companies[]> {
    return this.http.get<Companies[]>(this.companiesUrl);
  }
}