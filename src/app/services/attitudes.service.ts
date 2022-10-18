import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IAttitudes } from '../model/IAttitudes';
import { ATTITUDES } from 'src/assets/data/Attitudes';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AttitudesService {

  private apiURL = "http://127.0.0.1:8080/attitud/";

  constructor(private http: HttpClient) { }

  getAttitud(): Observable <IAttitudes[]>{
    return this.http.get<IAttitudes[]>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return of(ATTITUDES);
        })
    )
  }
}
