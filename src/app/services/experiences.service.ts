import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IExperience } from '../model/IExperience';
import { EXPERIENCE } from 'src/assets/data/Experience';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  
  private apiURL = "http://127.0.0.1:8080/experience/";

  constructor(private http: HttpClient) { }
  
  getExp(): Observable <IExperience[]>{
    return this.http.get<IExperience[]>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return of(EXPERIENCE);
        })
    )
  }

  postExp(exp: IExperience): Observable <IExperience> {
    return this.http.post<IExperience>(this.apiURL, exp, httpOptions);
  }

}
