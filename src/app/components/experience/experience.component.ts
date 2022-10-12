import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from 'src/app/model/Experience';
import { IExperience } from 'src/app/model/IExperience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: IExperience[] = [];

  constructor(private expServ: ExperiencesService) { }

  ngOnInit(): void {
    this.expServ.getExp().subscribe((value: IExperience[]) => this.experience = value);
  }

}
