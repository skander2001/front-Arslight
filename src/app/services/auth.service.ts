import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL : string = 'http://127.0.0.1:8000/api/auth';

  constructor(private http: HttpClient) { }

  logIn(data: any) {
    //post data
    return this.http.post(`${this.API_URL}/login/`, data)
      .pipe(catchError((err) => {
        console.log(err);
        return throwError(err);
      }));
  }
  createUser(data: any) {
    return this.http.post(`${this.API_URL}/signup/`, data)
      .pipe(catchError((err) => {
        console.log(err);
        return throwError(err);
      }));
  }


}
