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

  protected isLogged = false;

  constructor(private socServ: SocialsService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.socServ.getSoc().subscribe((value: ISocials[]) => this.socials = value);
    if (this.tokenServ.getToken())
      this.isLogged = true;
    else this.isLogged = false;
  }

}
