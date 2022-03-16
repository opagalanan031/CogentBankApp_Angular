import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-approve-acc',
  templateUrl: './transfer-approve-acc.component.html',
  styleUrls: ['./transfer-approve-acc.component.css'],
})
export class TransferApproveAccComponent implements OnInit {
  username = this.getUsername();

  constructor() {}

  ngOnInit(): void {}

  getUsername(): string {
    return 'Park';
  }
}
