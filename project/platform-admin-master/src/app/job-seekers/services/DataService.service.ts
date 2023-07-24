import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../model/job-seeker-list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonDataUrl = ' http://localhost:3000/items'; // Assuming the JSON file is in the "assets" folder

  constructor(private http: HttpClient) { }

  getData(): Observable<data[]> {
    return this.http.get<data[]>(this.jsonDataUrl);
  }
}
