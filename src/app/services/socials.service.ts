import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ISocials } from '../model/ISocials';
import { SOCIALS } from 'src/assets/data/Socials';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  private apiURL = "http://127.0.0.1:8080/socials/";

  constructor(private http: HttpClient) { }

  getSoc(): Observable <ISocials[]> {
    return this.http.get<ISocials[]>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return of(SOCIALS);
        })
    )
  }

}
