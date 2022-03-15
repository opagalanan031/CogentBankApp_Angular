import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css'],
})
export class AddBeneficiaryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addBeneficiary() {
    console.log('Beneficiary added');
    this.saveBeneficiary();
  }

  saveBeneficiary() {
    this.router.navigate(['/customer/dashboard']);
    alert('Beneficiary added successfully!');
  }
}
