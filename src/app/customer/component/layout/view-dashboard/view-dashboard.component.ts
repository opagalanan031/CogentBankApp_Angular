import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css'],
})
export class ViewDashboardComponent implements OnInit {
  username = this.getUsername();
  constructor() {}

  ngOnInit(): void {}

  getUsername(): string {
    return 'Oliver';
  }
}
