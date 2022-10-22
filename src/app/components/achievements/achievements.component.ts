import { Component, OnInit } from '@angular/core';
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

  changeState(value: boolean): void {
    this.showForm=value;
  }

  add(): void {
    this.outAchiev = { id: 0, name: '', description: '',
      url: '', userId: 0 };
    this.changeState(true);
  }
  
  edit(achiev: IAchievements) {
    this.outAchiev = achiev;
    this.changeState(true);
  }


  update(achiev: IAchievements){
    if(achiev.id===0)
      this.achievServ.postAchiev(achiev).subscribe();
    else
    this.achievServ.putAchiev(achiev).subscribe();
    this.changeState(false);
  }

  delete(achiev: IAchievements){
    this.achievServ.deleteAchiev(achiev).subscribe(
      () => {
        this.achievements = this.achievements.filter( (t) =>{
          return t.id !== achiev.id })
    })
    alert("Eliminado ☹");
  }

  
  

}
