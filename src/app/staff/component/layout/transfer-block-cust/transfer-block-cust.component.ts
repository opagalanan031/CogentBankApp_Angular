import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-block-cust',
  templateUrl: './transfer-block-cust.component.html',
  styleUrls: ['./transfer-block-cust.component.css'],
})
export class TransferBlockCustComponent implements OnInit {
  username = this.getUsername();

  constructor() {}

  ngOnInit(): void {}

  getUsername(): string {
    return 'Park';
  }
}
