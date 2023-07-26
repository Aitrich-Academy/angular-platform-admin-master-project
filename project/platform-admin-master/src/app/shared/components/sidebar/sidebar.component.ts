import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDashboard() {
    this.router.navigate(['/admin-home/dashboard']);
  }

  navigateToNewRegistrations() {
    this.router.navigate(['/admin-home/new-registration/registrations']);
  }

  navigateToMessages() {
    this.router.navigate(['/admin-home/messages']);
  }
}
