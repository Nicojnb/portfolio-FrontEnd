import { Component, Input, OnInit } from '@angular/core';
import { IAchievements } from 'src/app/model/IAchievements';

@Component({
  selector: 'app-achievements-form',
  templateUrl: './achievements-form.component.html',
  styleUrls: ['./achievements-form.component.css']
})
export class AchievementsFormComponent implements OnInit {


  @Input() achievement!: IAchievements;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete() {
    throw new Error('Method not implemented.');
  }
    
  onUpdate() {
    throw new Error('Method not implemented.');
  }

}
