import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/customer/model/accounts';
import { AccountService } from 'src/app/customer/service/account.service';

@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css'],
  providers: [AccountService],
})
export class TransferAmountComponent implements OnInit {
  accountList: Accounts[] = [];

  constructor(private accountService: AccountService) {
    // this.accountService
    //   .getAllAccounts()
    //   .subscribe((result) => (this.accountList = result));
  }

  ngOnInit(): void {}
}
