import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from 'src/app/model/Achievements';
import { IAchievements } from 'src/app/model/IAchievements';
import { AchievService } from 'src/app/services/achiev.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  achievements: IAchievements[] = [];

  constructor(private achievServ: AchievService) { }

  ngOnInit(): void {
    this.achievServ.getAchiev().subscribe((value: IAchievements[]) => this.achievements = value);
  }

}
