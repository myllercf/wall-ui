import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getAllWarningPaged2(pageNumber: number, pageSize: number, sortBy: string): Observable<WarningPageable> {
    let params = new HttpParams();

    //params.set('pageNumber', pageNumber.toString());
    //params.set('pageSize', pageSize.toString());
    //params.set('sortBy', sortBy);
    params.set('pageNumber', '0');
    params.set('pageSize', '3');
    params.set('sortBy', 'id');

    return this.http.get<WarningPageable>(this.url, {params: params})
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

  deleteWarning(id: number){
    console.log(this.url+'/'+id);
    
    return this.http.delete<string>(this.url+'/'+id)
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
