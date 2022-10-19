import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IExperience } from 'src/app/model/IExperience';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {

  @Input() exp: IExperience = {
    id: 0,
    name: '',
    role: '',
    start: new Date,
    end: new Date,
    userId: 0
  }
  
  @Output() expChange: EventEmitter<IExperience> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();
  
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      'donde':[ '' , [Validators.required, Validators.maxLength(30)]],
      'rol':['', [Validators.required, Validators.maxLength(30)]],
      'inicio':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
      'fin':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
    })
  }

  setValue() {
    if(this.exp.start && this.exp.end){
    this.form.setValue({
      donde:this.exp.name,
      rol:this.exp.role,
      inicio:this.exp.start,
      fin:this.exp.end
    })}else{
    this.form.patchValue({
      donde:this.exp.name,
      rol:this.exp.role
    })
  }
    //this.form.patchValue({tipo: 'Carson', titulo: 'Drew'});
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.form.reset();
    this.setValue();
    this.closeForm.emit(false);
  }

  ngOnChanges(): void {
    this.setValue();
  }
  
  onUpdate(event: Event) {
    
    if(this.form.get('donde')?.value)
    this.exp.name= this.form.get('donde')?.value;
    
    if(this.form.get('rol')?.value)
    this.exp.role= this.form.get('rol')?.value;

    if(this.form.get('inicio')?.value)
    this.exp.start = new Date(this.form.get('inicio')?.value);

    if(this.form.get('fin')?.value)
    this.exp.end= this.form.get('fin')?.value;

    this.expChange.emit(this.exp);

    this.form.reset();
  }

  get Donde(){
    return this.form.get('donde');
  }

  get Rol(){
    return this.form.get('rol');
  }

  get Inicio(){
    return this.form.get('inicio');
  }

  get Fin(){
    return this.form.get('fin');
  }

}
