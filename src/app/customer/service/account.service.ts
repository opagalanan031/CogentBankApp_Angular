import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from '../model/accounts';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // constructor(private _http: HttpClient) {}
  // getAllAccounts(): Observable<Accounts[]> {
  //   return this._http.get<Accounts[]>('');
  // }
}
