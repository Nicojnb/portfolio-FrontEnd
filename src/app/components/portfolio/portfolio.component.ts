import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  protected isLogged: boolean = false;
  protected isLoginFail: boolean = false;
  protected loginUser!: Login;
  protected roles: string[] = [];

  constructor(
    private authServ: AuthService, 
    private tokenServ: TokenService, 
    private router: Router) { }
  

  ngOnInit(): void {
    this.onLogin();
  }

  onLogin(): void {
    this.loginUser = new Login('nicol', 'nicol');
    this.authServ.logIn(this.loginUser).subscribe(
      (data): void => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenServ.setToken(data.token);
        this.tokenServ.setUserName(data.userName);
        this.tokenServ.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio']);
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.error(err.error.message);
      }
    );
  }

}
