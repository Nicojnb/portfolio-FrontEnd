import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudies } from 'src/app/model/IStudies';

@Component({
  selector: 'app-studies-form',
  templateUrl: './studies-form.component.html',
  styleUrls: ['./studies-form.component.css']
})
export class StudiesFormComponent implements OnInit {
  
  protected form: FormGroup;

  @Input() study: IStudies={
    id: 0,
    name: '',
    type: '',
    title: '',
    status: '',
    start: 0,
    end: 0,
    userId: 0
  }

  @Output() studyUpdate = new EventEmitter<IStudies>();

  constructor(private formBuilder: FormBuilder) { 
    this.form=formBuilder.group({
      'nombre':['', [Validators.required, Validators.maxLength(30)]],
      'tipo':['', [Validators.required, Validators.maxLength(30)]],
      'titulo':['', [Validators.required, Validators.maxLength(30)]],
      'estado':['', [Validators.required, Validators.maxLength(30)]],
      'inicio':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
      'fin':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
    })
  }

  setValue() {
    this.form.setValue({
      nombre:this.study.name,
      tipo:this.study.type,
      titulo:this.study.title,
      estado:this.study.status,
      inicio:this.study.start,
      fin:this.study.end });
    //this.form.patchValue({tipo: 'Carson', titulo: 'Drew'});
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void{
    this.setValue();
  }

  onUpdate(event: Event): void{
    
    
    console.log("uwu");
/*
    if(this.form.get('donde')?.value)
    this.exp.where= this.form.get('donde')?.value;
    
    if(this.form.get('rol')?.value)
    this.exp.role= this.form.get('rol')?.value;*/

    if(this.form.get('inicio')?.value)
    this.study.start = this.form.get('inicio')?.value;

    if(this.form.get('fin')?.value)
    this.study.end= this.form.get('fin')?.value;

    //this.expChange.emit(this.exp);
    console.log(this.study);
    console.log(this.form);
    this.form.reset();

  }


}
