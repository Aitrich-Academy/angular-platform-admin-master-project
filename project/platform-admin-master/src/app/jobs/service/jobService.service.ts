
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jobs } from '../model/job.model';


@Injectable({
  providedIn: 'root'
})
export class jobService {
  private jobsUrl = 'http://localhost:3000/jobs'; // Change the URL if your JSON Server is running on a different port.

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(this.jobsUrl);
  }

}