import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStudies } from '../model/IStudies';
import { STUDIES } from '../model/Studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  getStudy(): Observable <IStudies[]>{
    const study = of(STUDIES);
    return study;
  }

  constructor() { }
}
