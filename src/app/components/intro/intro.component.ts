import { Component, OnInit } from '@angular/core';
import { IAttributes } from 'src/app/model/IAttributes';
import { AttribService } from 'src/app/services/attrib.service';

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

  //protected outAbout: string="";

  constructor(private attribServ: AttribService) { }

  ngOnInit(): void {
    this.attribServ.getAttrib().subscribe(
      (value: IAttributes[]) => {
      this.attributes = value[0]
    });
  }

  update(attributes: IAttributes): void {
    this.attribServ.putAttrib(attributes).subscribe();
      //this.changeState(false);
  }

  updateAbout() {
    console.log(this.attributes.about);
    this.update(this.attributes);
  }
}
