import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/staff/model/login';
import { StaffService } from 'src/app/staff/service/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = new Login();

  constructor(private staffService: StaffService, private router: Router) {}

  ngOnInit(): void {}

  loginSubmit() {
    this.authenticateStaff();
  }

  authenticateStaff() {
    // this.staffService.login(this.login).subscribe(
    //  (data) => console.log(data),
    //   (error) => console.log(error)
    // );
    this.login = new Login();
    this.gotoDashboard();
  }

  gotoDashboard() {
    this.router.navigate(['/staff/dashboard']);
  }
}
