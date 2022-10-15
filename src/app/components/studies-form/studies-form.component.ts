import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudies } from 'src/app/model/IStudies';

@Component({
  selector: 'app-studies-form',
  templateUrl: './studies-form.component.html',
  styleUrls: ['./studies-form.component.css']
})
export class StudiesFormComponent implements OnInit {
  
  form: FormGroup;

  @Input() study: IStudies={
    id: 0,
    name: '',
    type: '',
    title: '',
    status: '',
    start: 0,
    end: 0
  };

  @Output() studyUpdate = new EventEmitter<IStudies>();

  constructor(private formBuilder: FormBuilder) { 
    this.form=formBuilder.group({
      'nombre':['', Validators.required,],
      'tipo':['', [Validators.required, Validators.maxLength(30)]],
      'titulo':['', [Validators.required, Validators.maxLength(30)]],
      'estado':['', [Validators.required, Validators.maxLength(30)]],
      'inicio':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
      'fin':['', [Validators.required, Validators.min(1922), Validators.max(2022)]],
    })
  }

  ngOnInit(): void {
  }

  onUpdate(event: Event): void{
    //this.studyUpdate.emit(this.study);
    console.log(this.form);
    console.log("uwu");

  }


}
