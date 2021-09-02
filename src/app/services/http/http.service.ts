import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Users } from 'src/app/interfaces/Users';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  fetchApi(url: string){
    // fetchApi(url: string){
    return this.httpClient.get(url);
    //  this.httpClient.get(url).pipe(
    //     catchError(err => {
    //       console.log(err.message)
    //       return throwError(err);
    //     }) // return a Observable with a error message to display
    //   ).subscribe(data => { return data })
  }
}
