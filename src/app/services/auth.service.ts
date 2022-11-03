import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { Login } from '../model/login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL = "https://nickbau.eastus.cloudapp.azure.com:8443/auth/";

  constructor(private httpClient: HttpClient) { }

  public logIn(login: Login): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(`${this.apiURL}login`, login, httpOptions);
  }
}