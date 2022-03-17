import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewAccount } from '../model/newAccount';
const AUTH_API = 'http://localhost:9015/api/customer/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private _http: HttpClient) {}

  getAccounts(userId: number): Observable<any> {
    return this._http.get(AUTH_API + `${userId}` + '/accounts', httpOptions);
  }

  createAccount(
    userId: number,
    accountType: string,
    amount: number
  ): Observable<any> {
    return this._http.post(
      AUTH_API + `${userId}` + '/accounts',
      { accountType, amount },
      httpOptions
    );
  }

  addBeneficiary(
    userId: number,
    accountNumber: number,
    accountType: string
  ): Observable<any> {
    return this._http.post(
      AUTH_API + `${userId}` + '/beneficiary',
      {
        accountType,
        accountNumber,
      },
      httpOptions
    );
  }

  getBeneficiaries(userId: number): Observable<any> {
    return this._http.get(AUTH_API + ` ${userId}` + '/beneficiary');
  }

  deleteBeneficiary(userId: number, beneficiaryId: number): Observable<any> {
    return this._http.delete(
      AUTH_API + ` ${userId}` + '/beneficiary' + `${beneficiaryId}`,
      {
        responseType: 'text',
      }
    );
  }

  transferAmount(transfer: any): Observable<any> {
    return this._http.put(AUTH_API + 'transfer', transfer);
  }

  updateProfile(userId: number, value: any): Observable<any> {
    return this._http.put(AUTH_API + `${userId}`, value);
  }

  getDetails(
    username: string,
    secretQuestion: string,
    secretAnswer: string
  ): Observable<any> {
    return this._http.get(
      AUTH_API +
        `${username + '/forgot'}/
        ${secretQuestion}/${secretAnswer}`,

      httpOptions
    );
  }

  updatePassword(username: string, password: string): Observable<any> {
    return this._http.put(AUTH_API + `${username}`, password);
  }
}
