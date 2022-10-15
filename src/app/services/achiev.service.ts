import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAchievements } from '../model/IAchievements';
import { ACHIEVEMENTS } from '../../assets/data/Achievements';

@Injectable({
  providedIn: 'root'
})
export class AchievService {

  getAchiev(): Observable <IAchievements[]> {
    const achiev = of(ACHIEVEMENTS);
    return achiev;
  }

  constructor() { }
}
