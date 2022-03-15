import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  updateProfile() {
    this.router.navigate(['/customer/dashboard']);
    alert('Profile updated successfully');
  }
}
