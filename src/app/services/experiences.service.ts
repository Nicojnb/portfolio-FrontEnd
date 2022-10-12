import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EXPERIENCE } from '../model/Experience';
import { IExperience } from '../model/IExperience';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  getExp(): Observable <IExperience[]>{
    const exp = of(EXPERIENCE);
    return exp;
  }

  constructor() { }
}
