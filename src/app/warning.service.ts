import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Warning } from './warning.model';
import { WarningPageable } from './warning-pageable.model';
import { WARNING_API } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  url: string = `${WARNING_API}/aviso`;

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getAllWarningPaged(): Observable<WarningPageable> {
    return this.http.get<WarningPageable>(this.url)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

  getWarning(id: number): Observable<Warning>{
    return this.http.get<Warning>(this.url+'/'+id)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

  createWarning(warning: Warning): Observable<Warning> {
    console.log(this.url);
    console.log(warning);
    console.log(this.httpOptions);      

    return this.http.post<Warning>(this.url, warning, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
