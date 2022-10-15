import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ATTRIBUTES } from 'src/assets/data/Attributes';
import { IAttributes } from '../model/IAttributes';

@Injectable({
  providedIn: 'root'
})
export class AttribService {
  getAttrib(): Observable <IAttributes> {
    const attrib = of(ATTRIBUTES[0]);
    return attrib;
  }

  constructor() { }
}
