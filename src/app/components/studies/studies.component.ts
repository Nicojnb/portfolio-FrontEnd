import { Component, OnInit } from '@angular/core';
import { IStudies } from 'src/app/model/IStudies';
import { StudiesService } from 'src/app/services/studies.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  protected studies: IStudies[] = [];

  protected outStudy: IStudies = { id: 0, name: '', type: '', title: '',
    status: '', start: 0, end: 0, userId: 0 };

  protected showForm: boolean = false;
  

  constructor(private studyServ: StudiesService) { }
  

  ngOnInit(): void {
    this.studyServ.getStudy().subscribe((value: IStudies[]) => this.studies = value);
  }

  changeState(value: boolean): void {
    this.showForm=value;
  }

  add(): void {
    this.outStudy = { id: 0, name: '', type: '', title: '', status: '', start: 0, end: 0, userId: 0};
    this.changeState(true);
  }
  
  edit(study: IStudies): void {
    this.outStudy = study;
    this.changeState(true);
  }

  update(study: IStudies){
    if(study.id===0)
      this.studyServ.postStudy(study).subscribe();
    else
    this.studyServ.putStudy(study).subscribe();
    this.changeState(false);
  }

  delete(study: IStudies){
    this.studyServ.deleteStudy(study).subscribe(
      () => {
        this.studies = this.studies.filter( (t) =>{
          return t.id !== study.id })
    })
    alert("Eliminado ☹");
  }

}
