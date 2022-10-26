import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private roles: Array<string> = [];

  private TOKEN_KEY: string = 'AuthToken';
  private USERNAME_KEY: string = 'AuthUserName';
  private AUTHORITIES_KEY: string = 'AuthAuthorities';

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY) as string;
  }

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(this.USERNAME_KEY);
    window.sessionStorage.setItem(this.USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(this.USERNAME_KEY) as string;
  }

  public setAuthorities(auth: string[]): void {
    window.sessionStorage.removeItem(this.AUTHORITIES_KEY);
    window.sessionStorage.setItem(this.AUTHORITIES_KEY, JSON.stringify(auth));
  }

  public getAuthorities(): string[] {
    let roles = [];
    if (sessionStorage.getItem(this.AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(this.AUTHORITIES_KEY) as string).forEach((element: { element: string; }) => {
        this.roles.push(element.element)
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }

}