import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-by-acc-num',
  templateUrl: './transfer-by-acc-num.component.html',
  styleUrls: ['./transfer-by-acc-num.component.css'],
})
export class TransferByAccNumComponent implements OnInit {
  username = this.getUsername();

  constructor() {}

  ngOnInit(): void {}

  getUsername(): string {
    return 'Park';
  }
}
