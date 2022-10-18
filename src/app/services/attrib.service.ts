import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ATTRIBUTES } from 'src/assets/data/Attributes';
import { IAttributes } from '../model/IAttributes';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class AttribService {
  
  private apiURL = "http://127.0.0.1:8080/attrib/";

  constructor(private http: HttpClient) { }

  getAttrib(): Observable <IAttributes> {
    //console.log(this.http.get<IAttributes>(this.apiURL+1000));
    const respuesta = this.http.get<IAttributes>(this.apiURL+1000).pipe(
      catchError((error: HttpErrorResponse) => {
        console.warn(
            'Error',
            error
          );
          return (ATTRIBUTES);
        })
    );
    console.log("respuesta: "+respuesta);
    return respuesta;
  }
}
