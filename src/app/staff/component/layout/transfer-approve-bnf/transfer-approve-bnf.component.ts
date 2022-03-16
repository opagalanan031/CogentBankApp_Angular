import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-approve-bnf',
  templateUrl: './transfer-approve-bnf.component.html',
  styleUrls: ['./transfer-approve-bnf.component.css'],
})
export class TransferApproveBnfComponent implements OnInit {
  username = this.getUsername();

  constructor() {}

  ngOnInit(): void {}

  getUsername(): string {
    return 'Park';
  }
}
