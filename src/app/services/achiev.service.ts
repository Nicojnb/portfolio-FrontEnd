import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { IAchievements } from '../model/IAchievements';
import { ACHIEVEMENTS } from '../../assets/data/Achievements';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AchievService {

  private apiURL = "http://127.0.0.1:8080/achievs/";

  constructor(private http: HttpClient) { }

  getAchiev(): Observable<IAchievements[]> {
    return this.http.get<IAchievements[]>(this.apiURL).pipe(retry(3),
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'Error',
          error
        );
        return of(ACHIEVEMENTS);
      })
    )
  }

  putAchiev(achiev: IAchievements): Observable<IAchievements> {
    const url = `${this.apiURL}${'add'}`;
    return this.http.put<IAchievements>(url, achiev, httpOptions);
  }

  postAchiev(achiev: IAchievements): Observable<IAchievements> {
    const url = `${this.apiURL}${'edit'}`;
    return this.http.put<IAchievements>(url, achiev, httpOptions);
  }

  deleteAchiev(achiev: IAchievements): Observable<IAchievements> {
    const url = `${this.apiURL}${'delete'}/${achiev.id}`
    return this.http.delete<IAchievements>(url);
  }

}