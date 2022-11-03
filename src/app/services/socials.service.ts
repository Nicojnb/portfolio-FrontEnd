import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { ISocials } from '../model/ISocials';
import { SOCIALS } from 'src/assets/data/Socials';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  private apiURL = "https://nickbau.eastus.cloudapp.azure.com:8443/socials/";

  constructor(private http: HttpClient) { }

  getSoc(): Observable<ISocials[]> {
    return this.http.get<ISocials[]>(this.apiURL).pipe(retry(3),
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'Error',
          error
        );
        return of(SOCIALS);
      })
    )
  }
  deleteSoc(social: ISocials): Observable<ISocials> {
    const url = `${this.apiURL}${'delete'}/${social.id}`
    return this.http.delete<ISocials>(url);
  }

}
