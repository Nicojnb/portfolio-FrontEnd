import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAchievements } from 'src/app/model/IAchievements';

@Component({
  selector: 'app-achievements-form',
  templateUrl: './achievements-form.component.html',
  styleUrls: ['./achievements-form.component.css']
})
export class AchievementsFormComponent implements OnInit {

  @Input() achievement: IAchievements = { id: 0, name: '',
    description: '', url: '', userId: 0 };

  @Output() achievementChange = new EventEmitter<IAchievements>();
  @Output() closeForm = new EventEmitter<boolean>();

  form: FormGroup;
  
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
  }

  ngOnInit(): void { }

  ngOnChanges() {
    this.setValue();
  }
  
  onCancel() {
    this.form.reset();
    this.setValue();
    this.closeForm.emit(false);
  }

  onUpdate(event: Event): void{

    if(this.form.get('nombre')?.value)
    this.achievement.name= this.form.get('nombre')?.value;
    
    if(this.form.get('descripcion')?.value)
    this.achievement.description= this.form.get('descripcion')?.value;

    if(this.form.get('url')?.value)
    this.achievement.url= this.form.get('url')?.value;

    this.achievementChange.emit(this.achievement);

    this.form.reset();

  }


}
