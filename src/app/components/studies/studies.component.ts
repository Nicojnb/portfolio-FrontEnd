import { Component, OnInit } from '@angular/core';
import { IStudies } from 'src/app/model/IStudies';
import { STUDIES } from 'src/app/model/Studies';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {
  
  studies: IStudies[] = [];

  constructor(private studyServ: StudiesService) { }

  ngOnInit(): void {
    this.studyServ.getStudy().subscribe((value: IStudies[]) => this.studies = value);
  }

}
