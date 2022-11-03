import { Component, Input, OnInit } from '@angular/core';
import { IAttitudes } from 'src/app/model/IAttitudes';
import { AttitudesService } from 'src/app/services/attitudes.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-attitudes',
  templateUrl: './attitudes.component.html',
  styleUrls: ['./attitudes.component.css']
})
export class AttitudesComponent implements OnInit {
  
  @Input() admin?: boolean;

  protected attitudes: IAttitudes[] = [];

  protected outAttitude: IAttitudes = {
    id: 0, name: '',
    description: '', percent: 0, userId: 0
  };

  protected showForm: boolean = false;

  private roles: string[] = [];

  //protected admin: boolean = false;

  constructor(private attitudServ: AttitudesService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.attitudServ.getAttitud().subscribe((value: IAttitudes[]) => this.attitudes = value);
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
    this.outAttitude = {
      id: 0, name: '',
      description: '', percent: 0, userId: 0
    };
    this.changeState(true);
  }

  edit(attitude: IAttitudes): void {
    this.outAttitude = attitude;
    this.changeState(true);

    console.log("recibido")
  }

  update(attitude: IAttitudes) {
    if (attitude.id === 0)
      this.attitudServ.postAttitud(attitude).subscribe();
    else
      this.attitudServ.putAttitud(attitude).subscribe();
    this.changeState(false);
  }

  delete(attitude: IAttitudes) {
    this.attitudServ.deleteAttitud(attitude).subscribe(
      () => {
        this.attitudes = this.attitudes.filter((t) => {
          return t.id !== attitude.id
        })
      })
    alert("Eliminado ☹");
  }

}
