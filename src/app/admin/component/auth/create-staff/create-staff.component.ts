import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/service/auth.service';
import { TokenStorageService } from 'src/app/admin/service/token-storage.service';

@Component({
  selector: 'app-create-staff',
  templateUrl: './create-staff.component.html',
  styleUrls: ['./create-staff.component.css'],
})
export class CreateStaffComponent implements OnInit {
  form: any = {
    username: null,
    fullName: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}
  ngOnInit(): void {}
  onSubmit(): void {
    const { username, fullName, password } = this.form;
    console.log(username);
    console.log(fullName);
    console.log(password);
    this.authService.createStaff(username, fullName, password).subscribe(
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
    this.router.navigate(['/admin/create-staff']);
    alert('Customer Registered successfully!');
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
