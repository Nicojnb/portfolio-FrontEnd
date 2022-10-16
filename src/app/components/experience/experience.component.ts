import { Component, OnInit } from '@angular/core';
import { IExperience } from 'src/app/model/IExperience';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  protected experience: IExperience[] = [];

  protected outExperience: IExperience = { id: 0, where: '', role: '', start: 0, end: 0 };

  protected showForm: boolean = false;


  constructor(private expServ: ExperiencesService) { }


  ngOnInit(): void {
    this.expServ.getExp().subscribe((value: IExperience[]) => this.experience = value);
  }

  changeState(): void {
    if(!this.showForm)
      this.showForm=true;
  }

  add(): void {
    this.changeState();
    this.outExperience = {id:0,where:"",role:"",start:0,end:0};
  }

  

  edit(exp: IExperience): void {
    this.outExperience = exp;
    this.changeState();
  }

  update(updateExp: IExperience): void{
    console.log("recibido")
    if(updateExp.id===0)
      console.log("no implementado");
    else
      this.expServ.postExp(updateExp).subscribe();
    console.log(updateExp);
  }
  
  delete(_t25: IExperience) {
    throw new Error('Method not implemented.');
  }

}
