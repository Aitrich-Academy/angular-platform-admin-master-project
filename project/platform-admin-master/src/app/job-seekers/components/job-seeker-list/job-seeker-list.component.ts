import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService.service';

@Component({
  selector: 'app-job-seeker-list',
  templateUrl: './job-seeker-list.component.html',
  styleUrls: ['./job-seeker-list.component.css']
})

export class JobSeekerListComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((result) => {
      this.data = result;
    });
  }

}