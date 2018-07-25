import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class AuthService {
  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    const err = error.message || JSON.stringify(error.error);
    errMsg = `${error.status} - ${error.statusText || ''} Details: ${err}`;
    return throwError(error);
  };
  constructor(private http: HttpClient) {}

  signupUser(email: string, password: string) {
    console.log('her')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('https://servermarket.herokuapp.com/accounts/login',
      {email: email, password: password}, httpOptions).pipe(
        catchError(this.handleError)
    )
  }
}
