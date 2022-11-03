import { Component, Input, OnInit } from '@angular/core';
import { IStudies } from 'src/app/model/IStudies';
import { StudiesService } from 'src/app/services/studies.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  @Input() admin?: boolean;

  protected studies: IStudies[] = [];

  protected outStudy: IStudies = {
    id: 0, name: '', type: '', title: '',
    status: '', start: 0, end: 0, userId: 0
  };

  protected showForm: boolean = false;

  //protected admin: boolean = false;

  private roles: string[] = [];

  constructor(private studyServ: StudiesService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.studyServ.getStudy().subscribe((value: IStudies[]) => this.studies = value);
      //this.isAdmin();
    }
  }

  isAdmin(): void {
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.admin = true;
      }
    });
  }

  changeState(value: boolean): void {
    this.showForm = value;
  }

  add(): void {
    this.outStudy = { id: 0, name: '', type: '', title: '', status: '', start: 0, end: 0, userId: 0 };
    this.changeState(true);
  }

  edit(study: IStudies): void {
    this.outStudy = study;
    this.changeState(true);
  }

  update(study: IStudies) {
    if (study.id === 0)
      this.studyServ.postStudy(study).subscribe();
    else
      this.studyServ.putStudy(study).subscribe();
    this.changeState(false);
  }

  delete(study: IStudies) {
    this.studyServ.deleteStudy(study).subscribe(
      () => {
        this.studies = this.studies.filter((t) => {
          return t.id !== study.id
        })
      })
    alert("Eliminado ☹");
  }

}
