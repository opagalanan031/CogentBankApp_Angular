import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
})
export class UpdatePasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  updatePassword() {
    this.router.navigate(['/customer/dashboard']);
    alert('Password updated successfully');
  }
}
