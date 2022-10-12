import { Component, OnInit } from '@angular/core';
import { ATTITUDES } from 'src/app/model/Attitudes';
import { IAttitudes } from 'src/app/model/IAttitudes';
import { AttitudesService } from 'src/app/services/attitudes.service';

@Component({
  selector: 'app-attitudes',
  templateUrl: './attitudes.component.html',
  styleUrls: ['./attitudes.component.css']
})
export class AttitudesComponent implements OnInit {

  attitudes: IAttitudes[] = [];

  constructor(private attitudServ: AttitudesService) { }

  ngOnInit(): void {
    this.attitudServ.getAttitud().subscribe((value: IAttitudes[]) => this.attitudes = value);
  }
}
