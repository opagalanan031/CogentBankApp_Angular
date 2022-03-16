import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/customer/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    fullName: null,
    password: null,
    confirmPassword: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  onSubmit(): void {
    const { username, fullName, password, confirmPassword } = this.form;
    this.authService
      .register(username, fullName, password, confirmPassword)
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(['/customer/authenticate']);
    alert('Customer Registered successfully!');
  }
}
