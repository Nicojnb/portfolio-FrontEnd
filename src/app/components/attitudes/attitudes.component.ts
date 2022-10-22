import { Component, OnInit } from '@angular/core';
import { IAttitudes } from 'src/app/model/IAttitudes';
import { AttitudesService } from 'src/app/services/attitudes.service';

@Component({
  selector: 'app-attitudes',
  templateUrl: './attitudes.component.html',
  styleUrls: ['./attitudes.component.css']
})
export class AttitudesComponent implements OnInit {

  protected attitudes: IAttitudes[] = [];

  protected outAttitude: IAttitudes = { id: 0, name: '',
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
    this.outAttitude = { id: 0, name: '',
    description: '', percent: 0, userId: 0 };
    this.changeState(true);
  }

  edit(attitude: IAttitudes): void {
    this.outAttitude = attitude;
    this.changeState(true);
    
    console.log("recibido")
  }

  update(attitude: IAttitudes){
    if(attitude.id===0)
      this.attitudServ.postAttitud(attitude).subscribe();
    else
    this.attitudServ.putAttitud(attitude).subscribe();
    this.changeState(false);
  }

  delete(attitude: IAttitudes){
    this.attitudServ.deleteAttitud(attitude).subscribe(
      () => {
        this.attitudes = this.attitudes.filter( (t) =>{
          return t.id !== attitude.id })
    })
    alert("Eliminado ☹");
  }

}
