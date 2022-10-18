import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAchievements } from 'src/app/model/IAchievements';

@Component({
  selector: 'app-achievements-form',
  templateUrl: './achievements-form.component.html',
  styleUrls: ['./achievements-form.component.css']
})
export class AchievementsFormComponent implements OnInit {

  @Input() achievement!: IAchievements;

  @Output() achievementUpdate = new EventEmitter<IAchievements>();


  form!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.form=formBuilder.group({
      'nombre':['', [Validators.required, Validators.maxLength(30)]],
      'descripcion':['', [Validators.required, Validators.maxLength(30)]],
      'url':['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  setValue() {
    this.form.setValue({
      nombre:this.achievement.name,
      descripcion:this.achievement.description,
      url:this.achievement.url });
    //this.form.patchValue({tipo: 'Carson', titulo: 'Drew'});
  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.setValue();
  }

  onUpdate($event: any) {
    
  }
  
  onDelete() {
    throw new Error('Method not implemented.');
  }

    

}
