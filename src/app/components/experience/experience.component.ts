import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from 'src/app/model/Experience';
import { IExperience } from 'src/app/model/IExperience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: IExperience[] = EXPERIENCE;

  constructor() { }

  ngOnInit(): void {
  }

}
