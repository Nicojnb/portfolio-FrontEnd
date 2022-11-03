import { Component, Input, OnInit } from '@angular/core';
import { IExperience } from 'src/app/model/IExperience';
import { ExperiencesService } from 'src/app/services/experiences.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() admin?: boolean;

  protected experience: IExperience[] = [];

  protected outExperience: IExperience = { id: 0, name: '', role: '', userId: 0 };

  protected showForm: boolean = false;

  private roles: string[] = [];

  //protected admin: boolean = false;

  constructor(private expServ: ExperiencesService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.expServ.getExp().subscribe((value: IExperience[]) => this.experience = value);
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
    this.showForm=value;
  }

  add(): void {
    this.changeState(true);
    this.outExperience = {id:0,name:"",role:"",userId:0};
  }

  edit(exp: IExperience): void {
    this.outExperience = exp;
    this.changeState(true);
  }

  update(updateExp: IExperience): void{
    if(updateExp.id===0)
      this.expServ.postExp(updateExp).subscribe();
    else
      this.expServ.putStudy(updateExp).subscribe();
      this.changeState(false);
  }
  
  delete(exp: IExperience) {
    this.expServ.deleteExp(exp).subscribe(
      () => {
      this.experience = this.experience.filter( (t) =>{
        return t.id !== exp.id })
    })
    alert("Eliminado: ☹");
  }

}
