import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    const err = error.message || JSON.stringify(error.error);
    errMsg = `${error.status} - ${error.statusText || ''} Details: ${err}`;
    return throwError(error);
  };

  storeRecipe(recipes: any[]) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        // 'Authorization': 'my-auth-token'
      })
    };
    return this.http.post('https://recipe-project-9c369.firebaseio.com/data.json', recipes, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getRecipes() {
    return this.http.get('https://recipe-project-9c369.firebaseio.com/data.json').pipe(
      catchError(this.handleError)
    );
  }
}

