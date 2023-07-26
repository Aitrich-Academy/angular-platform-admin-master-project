import { Component,OnInit } from '@angular/core';
import { Companies } from '../../model/job.model';
import { jobService } from '../../service/jobService.service';



@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css']
})
export class ProvidersListComponent  implements OnInit {
  companies: Companies[] = [];

  constructor(private jobService: jobService) {}

  ngOnInit(): void {
 
    this.jobService.getCompanies().subscribe((result)=>{
      this.companies=result;
      console.log(this.companies);
  });
}
}

