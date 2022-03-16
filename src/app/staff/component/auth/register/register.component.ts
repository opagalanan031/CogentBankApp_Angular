import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer/service/customer.service';
import { Register } from 'src/app/customer/model/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  submitted = false;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newCustomer(): void {
    this.submitted = false;
    this.register = new Register();
  }

  registerCustomer() {
    // this.customerService.register(this.register).subscribe(
    //  (data) => console.log(data),
    //  (error) => console.log(error)
    //);
    this.register = new Register();
    this.gotoHome();
  }

  registerSubmit() {
    this.submitted = true;
    this.registerCustomer();
  }

  gotoHome() {
    this.router.navigate(['/customer/authenticate']);
    alert('Customer Registered successfully!');
  }
}
