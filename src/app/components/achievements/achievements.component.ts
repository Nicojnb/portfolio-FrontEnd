import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from 'src/app/model/Achievements';
import { IAchievements } from 'src/app/model/IAchievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: IAchievements[] = ACHIEVEMENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
