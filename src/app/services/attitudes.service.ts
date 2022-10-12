import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ATTITUDES } from '../model/Attitudes';
import { IAttitudes } from '../model/IAttitudes';

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
