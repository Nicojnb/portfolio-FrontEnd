import { Component, OnInit } from '@angular/core';
import { ACHIEVEMENTS } from 'src/assets/data/Achievements';
import { IAchievements } from 'src/app/model/IAchievements';
import { AchievService } from 'src/app/services/achiev.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  protected showForm: boolean = false;

  protected achievements: IAchievements[] = [];

  protected outAchiev!: IAchievements;

  constructor(private achievServ: AchievService) { }

  ngOnInit(): void {
    this.achievServ.getAchiev().subscribe((value: IAchievements[]) => this.achievements = value);
  }

  changeState(): void {
    if(!this.showForm)
      this.showForm=true;
  }
  
  add(): void {
    this.changeState();
    this.outAchiev = {
      id: 0,
      name: '',
      description: '',
      url: '',
      userId: 0
    }
  }

  edit(achiev: IAchievements) {
    this.outAchiev = achiev;
    this.changeState();
    console.log(this.outAchiev);
  }
}
