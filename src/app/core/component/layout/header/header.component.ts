import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/customer/service/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
