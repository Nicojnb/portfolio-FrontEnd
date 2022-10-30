import { Component, Input, OnInit } from '@angular/core';
import { ISocials } from 'src/app/model/ISocials';
import { SocialsService } from 'src/app/services/socials.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string = "";

  protected socials: ISocials[] = [];

  protected admin: boolean = false;

  private roles!: string[];

  constructor(private socServ: SocialsService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.socServ.getSoc().subscribe((value: ISocials[]) => this.socials = value);
      this.isAdmin();
    }
  }

  isAdmin(): void {
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.admin = true;
      }
    });
  }


  onLogOut(): void {
    this.tokenServ.logOut();
    this.tokenServ.autoLogin();
    this.admin = false;
  }
}
