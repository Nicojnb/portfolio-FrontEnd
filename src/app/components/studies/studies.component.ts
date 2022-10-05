import { Component, OnInit } from '@angular/core';
import { IStudies } from 'src/app/model/IStudies';
import { STUDIES } from 'src/app/model/Studies';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  
  studies: IStudies[] = STUDIES;

  constructor() { }

  ngOnInit(): void {
  }

}
