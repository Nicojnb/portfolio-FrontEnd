import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { ATTRIBUTES } from 'src/assets/data/Attributes';
import { IAttributes } from '../model/IAttributes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AttribService {

  private apiURL = "https://nickbau.eastus.cloudapp.azure.com:8443/attrib/";

  constructor(private http: HttpClient) { }

  getAttrib(): Observable<IAttributes[]> {
    //console.log(this.http.get<IAttributes>(this.apiURL+1000));
    return this.http.get<IAttributes[]>(this.apiURL).pipe(retry(3),
      catchError((error: HttpErrorResponse) => {
        console.warn(
          'Error',
          error
        );
        return of(ATTRIBUTES);
      })
    );
  }

  putAttrib(attrib: IAttributes): Observable<IAttributes> {
    const url = `${this.apiURL}${'edit'}`
    return this.http.put<IAttributes>(url, attrib, httpOptions);
  }
}
