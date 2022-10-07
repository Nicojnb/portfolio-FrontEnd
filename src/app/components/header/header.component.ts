import { Component, Input, OnInit } from '@angular/core';
import { ISocials } from 'src/app/model/ISocials';
import { SOCIALS } from 'src/app/model/Socials';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() name: string = "";

  socials: ISocials[] = SOCIALS;

  constructor() { }

  ngOnInit(): void {
  }

}
