import { Component, Input, OnInit } from '@angular/core';
import { ISocials } from 'src/app/model/ISocials';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string = "";

  socials: ISocials[] = [];

  constructor(private socServ: SocialsService) { }

  ngOnInit(): void {
    this.socServ.getSoc().subscribe((value: ISocials[]) => this.socials=value);
  }

}
