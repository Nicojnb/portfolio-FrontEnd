import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenServ: TokenService) { }

  private roles!: string[];

  protected admin: boolean = false;

  ngOnInit(): void {
    this.roles=this.tokenServ.getAuthorities();
    if (!this.roles.length)
      this.tokenServ.autoLogin();
    else 
      this.isAdmin();
  }

  isAdmin(): void {
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.admin = true;
      }
    });
  }

}
