import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/customer/model/login';
import { CustomerService } from 'src/app/customer/service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginSubmit() {
    this.authenticateCustomer();
  }

  authenticateCustomer() {
    // this.customerService.login(this.login).subscribe(
    //  (data) => console.log(data),
    //   (error) => console.log(error)
    // );
    this.login = new Login();
    this.gotoDashboard();
  }

  gotoDashboard() {
    this.router.navigate(['/customer/dashboard']);
  }
}
