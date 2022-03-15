import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/customer/model/account';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css'],
})
export class ViewAccountsComponent implements OnInit {
  account: Account = {
    accountType: 'SB',
    accountBalance: 1000,
    enableStatus: 'Enabled',
  };

  constructor() {}

  ngOnInit(): void {}
}
