import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IStudies } from '../model/IStudies';
import { STUDIES } from 'src/assets/data/Studies';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  private apiURL = "http://127.0.0.1:8080/studies/";

  constructor(private http: HttpClient) { }

  postStudy(study: IStudies): Observable <IStudies>{
    //const url= `${this.apiURL}/${study.id}`
    return this.http.post<IStudies>(this.apiURL, study, httpOptions);
  }

  getStudy(): Observable <IStudies[]>{
    return this.http.get<IStudies[]>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return of(STUDIES);
        })
    )
  }

  putStudy(study: IStudies): Observable <IStudies>{
    const url= `${this.apiURL}/${study.id}`
    return this.http.put<IStudies>(url, study, httpOptions);
  }

  deleteStudy(study: IStudies): Observable <IStudies>{
    const url= `${this.apiURL}/${study.id}`
    return this.http.delete<IStudies>(url);
  }

}
