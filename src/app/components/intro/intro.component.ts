import { Component, OnInit } from '@angular/core';
import { ATTRIBUTES } from 'src/app/model/Attributes';
import { IAttributes } from 'src/app/model/IAttributes';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  attributes: IAttributes = ATTRIBUTES[0];

  constructor() { }

  ngOnInit(): void {
  }

}
