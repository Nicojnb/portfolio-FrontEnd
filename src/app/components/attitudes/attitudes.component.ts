import { Component, OnInit } from '@angular/core';
import { IAttitudes } from 'src/app/model/IAttitudes';
import { AttitudesService } from 'src/app/services/attitudes.service';
import { ISvg } from 'src/app/model/ISvg';

@Component({
  selector: 'app-attitudes',
  templateUrl: './attitudes.component.html',
  styleUrls: ['./attitudes.component.css']
})
export class AttitudesComponent implements OnInit {

  protected attitudes: IAttitudes[] = [];

  protected outAttitudes: IAttitudes = { id: 0, name: '',
    description: '', percent: 0, userId: 0 };

  protected showForm: boolean = false;
  
  constructor(private attitudServ: AttitudesService) { }

  ngOnInit(): void {
    this.attitudServ.getAttitud().subscribe((value: IAttitudes[]) => this.attitudes = value);
  }

  changeState(value: boolean): void {
    this.showForm=value;
  }

  add(): void {
    this.outAttitudes = { id: 0, name: '',
    description: '', percent: 0, userId: 0 };
    this.changeState(true);
  }

  edit(study: IAttitudes): void {
    this.outAttitudes = study;
    this.changeState(false);
  }


  update(study: IAttitudes){
    console.log("recibido")
    if(study.id===0)
      this.attitudServ.postAttitud(study).subscribe();
    else
    this.attitudServ.putAttitud(study).subscribe();
    this.changeState(false);
  }

  delete(study: IAttitudes){
    this.attitudServ.deleteAttitud(study).subscribe(
      () => {
        this.attitudes = this.attitudes.filter( (t) =>{
          return t.id !== study.id })
    })
    alert("Eliminado ☹");
  }

}
