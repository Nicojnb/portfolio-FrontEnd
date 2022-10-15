import { Component, OnInit } from '@angular/core';
import { IStudies } from 'src/app/model/IStudies';
import { StudiesService } from 'src/app/services/studies.service';
import { STUDIES } from 'src/assets/data/Studies';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  protected outStudy: IStudies = { id: 0, name: '', type: '', title: '', status: '', start: 0, end: 0 };

  protected showForm: boolean = false;
  
  protected studies: IStudies[] = [];
  
  constructor(private studyServ: StudiesService) { }

  ngOnInit(): void {
    this.studyServ.getStudy().subscribe((value: IStudies[]) => this.studies = value);
  }

  changeState() {
    if(!this.showForm)
      this.showForm=true;
  }
  
  edit(study: IStudies): void {
    this.outStudy = study;
    this.changeState();
  }

  create(study: IStudies){
    this.studyServ.postStudy(study).subscribe();
    alert("No tengo BackEnd ☹");
  }

  update(study: IStudies){
    console.log(study);
    this.studyServ.putStudy(study).subscribe();
    alert("No tengo BackEnd ☹");
  }

  delete(study: IStudies){
    this.studyServ.deleteStudy(study).subscribe(
      () => {
        this.studies = this.studies.filter( (t) =>{
          return t.id !== study.id })
    })
    alert("No tengo BackEnd ☹");
  }

}
