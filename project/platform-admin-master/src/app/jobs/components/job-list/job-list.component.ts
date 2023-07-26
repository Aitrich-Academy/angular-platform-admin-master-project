import { Component, OnInit } from '@angular/core';
import { jobService } from '../../service/jobService.service';
import { Jobs } from '../../model/job.model';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Jobs[] = [];
  filteredJobs: Jobs[] = [];

  constructor(private jobService: jobService) { }

    ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe((result) => {
      this.jobs = result;
      this.filteredJobs = result;

    });
  }

  filterJobs(jobPost: string): void {

    // this.filteredJobs = this.jobs.filter((job) => job.jobPost === jobPost);
    this.filteredJobs = this.jobs.filter((job) => job.jobPost.toLowerCase().includes(jobPost.toLowerCase()));

  }
}



