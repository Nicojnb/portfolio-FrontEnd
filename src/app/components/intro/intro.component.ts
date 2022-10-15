import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { IAttributes } from 'src/app/model/IAttributes';
import { AttribService } from 'src/app/services/attrib.service';
import { ATTRIBUTES } from 'src/assets/data/Attributes';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  attributes: IAttributes = {
    id: 0,
    firstName: '',
    lastName: '',
    prof: '',
    urlImage: '',
    urlBack: '',
    state: '',
    country: '',
    university: '',
    about: ''
  };

  constructor(private attribServ: AttribService) { }

  ngOnInit(): void {
    this.attribServ.getAttrib().subscribe((value: IAttributes) => this.attributes = value);
  }

}
