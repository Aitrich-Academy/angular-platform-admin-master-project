import { Component,OnInit } from '@angular/core';
import { dashboardService } from '../../services/dashboard.service';
import { Card } from '../../model/dashboard.model';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  cards: Card[] = [];
  backgroundColors: string[] = ['green', 'skyblue', 'blue', 'blue', 'skyblue', 'green'];

  constructor(private dashboardService: dashboardService) { }

  ngOnInit(): void {
    this.fetchCardsData();
  }

  fetchCardsData(): void {
    this.dashboardService.getCards().subscribe(
      (response: Card[]) => {
        this.cards = response;
      },
      (error: any) => {
        console.error('Error fetching cards data:', error);
      }
    );
  }

  changeBackgroundColor(card: Card, index: number): void {
    card.backgroundColor = this.backgroundColors[index];
  }
}
