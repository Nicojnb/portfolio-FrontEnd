import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { IStudies } from '../model/IStudies';
import { STUDIES } from 'src/assets/data/Studies';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class StudiesService {

  private apiURL = "https://nickbau.eastus.cloudapp.azure.com:8443/studies/";

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getStudy(): Observable<IStudies[]> {
    return this.http.get<IStudies[]>(this.apiURL).pipe(retry(3),
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'Error',
          error
        );
        return of(STUDIES);
      })
    )
  }

  postStudy(study: IStudies): Observable<IStudies> {
    const url = `${this.apiURL}${"add"}`
    return this.http.post<IStudies>(url, study, httpOptions)//return this.httpClient.post<IOrder>(this.apiUrl+"agregar", order)
      .pipe(
        //catchError(this.handleError('postOrder', order))
        catchError(this.handleError)
      );
  }

  putStudy(study: IStudies): Observable<IStudies> {
    const url = `${this.apiURL}${'edit'}`;
    return this.http.put<IStudies>(url, study, httpOptions)//return this.httpClient.post<IOrder>(this.apiUrl+"agregar", order)
      .pipe(
        //catchError(this.handleError('postOrder', order))
        catchError(this.handleError)
      );
  }

  deleteStudy(study: IStudies): Observable<IStudies> {
    const url = `${this.apiURL}${'delete'}/${study.id}`
    return this.http.delete<IStudies>(url);
  }

}
