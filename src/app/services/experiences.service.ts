import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IExperience } from '../model/IExperience';
import { EXPERIENCE } from 'src/assets/data/Experience';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  
  apiURL: string = "";

  constructor(private http: HttpClient) { }
  
  getExp(): Observable <IExperience[]>{
    const exp = of(EXPERIENCE);
    return exp;
  }

  postExp(exp: IExperience): Observable <IExperience> {
    return this.http.post<IExperience>(this.apiURL, exp, httpOptions);
  }

}
