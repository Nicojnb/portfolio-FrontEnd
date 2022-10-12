import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ACHIEVEMENTS } from '../model/Achievements';
import { IAchievements } from '../model/IAchievements';

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
