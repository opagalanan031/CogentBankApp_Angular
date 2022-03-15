import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  // private baseUrl = 'http://localhost:9015/api/customer/';
  // constructor(private _http: HttpClient) {}
  // register(register: object): Observable<any> {
  //   return this._http.post(`${this.baseUrl + 'register'}`, register);
  //  }
  //  login(login: object): Observable<any> {
  //  return this._http.post(`${this.baseUrl + 'authenticate'}`, login);
  // }
}
