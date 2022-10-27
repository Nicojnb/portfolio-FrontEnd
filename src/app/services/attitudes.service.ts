import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { IAttitudes } from '../model/IAttitudes';
import { ATTITUDES } from 'src/assets/data/Attitudes';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AttitudesService {

  private apiURL = "http://127.0.0.1:8080/attitud/";

  constructor(private http: HttpClient) { }

  getAttitud(): Observable<IAttitudes[]> {
    return this.http.get<IAttitudes[]>(this.apiURL).pipe(retry(3),
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'Error',
          error
        );
        return of(ATTITUDES);
      })
    )
  }

  postAttitud(attitud: IAttitudes): Observable<IAttitudes> {
    const url = `${this.apiURL}${'add'}`;
    return this.http.post<IAttitudes>(url, attitud, httpOptions);
  }

  putAttitud(attitud: IAttitudes): Observable<IAttitudes> {
    const url = `${this.apiURL}${'edit'}`;
    return this.http.put<IAttitudes>(url, attitud, httpOptions);
  }

  deleteAttitud(attitud: IAttitudes): Observable<IAttitudes> {
    const url = `${this.apiURL}${'delete'}/${attitud.id}`
    return this.http.delete<IAttitudes>(url);
  }

}
