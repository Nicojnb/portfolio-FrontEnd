import { Component, Input, OnInit } from '@angular/core';
import { IAchievements } from 'src/app/model/IAchievements';
import { AchievService } from 'src/app/services/achiev.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  @Input() admin?: boolean;

  protected showForm: boolean = false;

  protected achievements: IAchievements[] = [];

  protected outAchiev!: IAchievements;

  private roles: string[] = [];

  //protected admin: boolean = false;

  constructor(private achievServ: AchievService, private tokenServ: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenServ.getAuthorities();
    if (this.roles.length) {
      this.achievServ.getAchiev().subscribe((value: IAchievements[]) => this.achievements = value);
      //this.isAdmin();
    }
  }
/*
  isAdmin(): void {
    this.roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.admin = true;
      }
    });
  }*/

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
