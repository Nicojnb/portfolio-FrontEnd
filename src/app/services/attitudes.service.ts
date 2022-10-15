import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAttitudes } from '../model/IAttitudes';
import { ATTITUDES } from 'src/assets/data/Attitudes';

@Injectable({
  providedIn: 'root'
})
export class AttitudesService {

  getAttitud(): Observable <IAttitudes[]>{
    const attitud = of(ATTITUDES);
    return attitud;
  }

  constructor() { }
}
