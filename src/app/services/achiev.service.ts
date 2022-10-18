import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IAchievements } from '../model/IAchievements';
import { ACHIEVEMENTS } from '../../assets/data/Achievements';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AchievService {

  private apiURL = "http://127.0.0.1:8080/achievs/";

  constructor(private http: HttpClient) { }

  getAchiev(): Observable <IAchievements[]> {
    return this.http.get<IAchievements[]>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return of(ACHIEVEMENTS);
        })
    )
  }
  
}
