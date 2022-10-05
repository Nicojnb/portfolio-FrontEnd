import { Component, OnInit } from '@angular/core';
import { ATTITUDES } from 'src/app/model/Attitudes';
import { IAttitudes } from 'src/app/model/IAttitudes';

@Component({
  selector: 'app-attitudes',
  templateUrl: './attitudes.component.html',
  styleUrls: ['./attitudes.component.css']
})
export class AttitudesComponent implements OnInit {

  attitudes: IAttitudes[] = ATTITUDES;

  constructor() { }

  ngOnInit(): void {
  }

}
