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
    return this._http.get(AUTH_API + ` ${userId}` + '/accounts');
  }

  createAccount(
    userId: number,
    accountType: string,
    amount: number
  ): Observable<any> {
    return this._http.post(
      AUTH_API + `${userId}` + '/accounts',
      {
        accountType,
        amount,
      },
      httpOptions
    );
  }

  addBeneficiary(
    accountNumber: number,
    accountType: string,
    userId: number
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

  updateProfile(userId: number, value: any) {
    return this._http.put(AUTH_API + `${userId}`, value);
  }
}
