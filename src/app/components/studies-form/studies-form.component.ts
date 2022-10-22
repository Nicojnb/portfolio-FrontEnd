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

  @Output() studyChange = new EventEmitter<IStudies>();
  @Output() closeForm = new EventEmitter<boolean>();

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
      fin:this.study.end,
      
     });
    //this.form.patchValue({tipo: 'Carson', titulo: 'Drew'});
  }

  ngOnInit(): void { }

  ngOnChanges(): void{
    this.setValue();
  }

  onCancel() {
    this.form.reset();
    this.setValue();
    this.closeForm.emit(false);
  }

  onUpdate(event: Event): void{

    if(this.form.get('nombre')?.value)
    this.study.name= this.form.get('nombre')?.value;
    
    if(this.form.get('tipo')?.value)
    this.study.type= this.form.get('tipo')?.value;

    if(this.form.get('titulo')?.value)
    this.study.title= this.form.get('titulo')?.value;

    if(this.form.get('estado')?.value)
    this.study.status= this.form.get('estado')?.value;

    if(this.form.get('inicio')?.value)
    this.study.start = this.form.get('inicio')?.value;

    if(this.form.get('fin')?.value)
    this.study.end= this.form.get('fin')?.value;

    this.studyChange.emit(this.study);

    this.form.reset();

  }

}
