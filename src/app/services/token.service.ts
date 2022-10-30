import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private roles: Array<string> = [];

  private TOKEN_KEY: string = 'AuthToken';
  private USERNAME_KEY: string = 'AuthUserName';
  private AUTHORITIES_KEY: string = 'AuthAuthorities';

  constructor(private authServ: AuthService, private router: Router) { }

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
      JSON.parse(sessionStorage.getItem(this.AUTHORITIES_KEY) as string).forEach((authority: { authority: string; }) => {
        this.roles.push(authority.authority)
      });
    }
    return this.roles;
  }

  public logOut(): void {
    window.sessionStorage.clear();
  }

  public autoLogin(): void {
    console.log("auto");
    
    let loginUser = new Login('Anonymous', 'Anonymous');
    this.authServ.logIn(loginUser).subscribe(
      (data: { token: string; userName: string; authorities: string[]; }): void => {
        this.setToken(data.token);
        this.setUserName(data.userName);
        this.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio']);
      },
      (err: { error: { message: any; }; }) => {
        console.error(err.error.message);
      }
    );
  }
}