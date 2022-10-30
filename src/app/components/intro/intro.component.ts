import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAttributes } from 'src/app/model/IAttributes';
import { AttribService } from 'src/app/services/attrib.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  protected attributes: IAttributes = {
    id: 0, firstName: '', lastName: '', prof: '', urlImage: '', urlBack: '',
    state: '', country: '', university: '', about: '', userId: 0
  };

  protected outAttrib: IAttributes = {
    id: 0, firstName: '', lastName: '',
    prof: '', urlImage: '', urlBack: '', state: '', country: '',
    university: '', about: '', userId: 0
  };

  protected showForm: boolean = false;

  private roles: string[] = [];

  protected admin: boolean = false;

  constructor(private attribServ: AttribService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.cargar();
      this.isAdmin();
    }
  }

  cargar(): void {
    this.attribServ.getAttrib().subscribe(
      (value: IAttributes[]) => {
        this.attributes = value[0]
      });
  }

  changeState(value: boolean): void {
    this.showForm = value;
  }

  add(): void {
    this.changeState(true);
  }

  update(attributes: IAttributes): void {
    this.attribServ.putAttrib(attributes).subscribe();
    this.changeState(false);
  }

  updateAbout() {
    console.log(this.attributes.about);
    this.update(this.attributes);
  }

  edit(attrib: IAttributes): void {
    //this.outExperience = exp;
    this.changeState(true);
  }

  isAdmin(): void {
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.admin = true;
      }
    });
  }


}
