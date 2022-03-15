import { Component, OnInit } from '@angular/core';
import { NewAccount } from 'src/app/customer/model/newAccount';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer/service/customer.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account: NewAccount = new NewAccount();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createAccount() {
    console.log('Account created');
    this.addAccount();
  }

  addAccount() {
    // this.customerService.addAccount(this.account).subscribe(
    //  (data) => console.log(data),
    //   (error) => console.log(error)
    // );
    this.account = new NewAccount();
    this.gotoDashboard();
  }

  gotoDashboard() {
    this.router.navigate(['/customer/dashboard']);
    alert('Account added successfully!');
  }
}
