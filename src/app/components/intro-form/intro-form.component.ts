import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAttributes } from 'src/app/model/IAttributes';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {

  @Input() attrib: IAttributes = {
    id: 0,
    firstName: '',
    lastName: '',
    prof: '',
    urlImage: '',
    urlBack: '',
    state: '',
    country: '',
    university: '',
    about: '',
    userId: 0
  }
  
  @Output() attribChange: EventEmitter<IAttributes> = new EventEmitter();
  @Output() closeForm: EventEmitter<boolean> = new EventEmitter();

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form=this.formBuilder.group({
      'nombre':[ '' , [Validators.required, Validators.maxLength(30)]],
      'apellido':['', [Validators.required, Validators.maxLength(30)]],
      'prof':['', [Validators.required, Validators.maxLength(30)]],
      'prov':['', [Validators.required, Validators.maxLength(30)]],
      'pais':[ '' , [Validators.required, Validators.maxLength(30)]],
      'univ':['', [Validators.required, Validators.maxLength(30)]],
    })
  }

  ngOnInit(): void {
  }
  
  setValue() {
    this.form.setValue({
      'nombre':this.attrib.firstName,
      'apellido':this.attrib.lastName,
      'prof':this.attrib.prof,
      'prov':this.attrib.state,
      'pais':this.attrib.country,
      'univ':this.attrib.university
    })
  }

  onCancel() {
    this.form.reset();
    this.setValue();
    this.closeForm.emit(false);
  }

  onUpdate(event: Event) {
    
    if(this.form.get('nombre')?.value)
    this.attrib.firstName= this.form.get('nombre')?.value;
    
    if(this.form.get('apellido')?.value)
    this.attrib.lastName= this.form.get('apellido')?.value;

    if(this.form.get('prof')?.value)
    this.attrib.prof= this.form.get('prof')?.value;
    
    if(this.form.get('prov')?.value)
    this.attrib.state= this.form.get('prov')?.value;

    if(this.form.get('pais')?.value)
    this.attrib.country= this.form.get('pais')?.value;
    
    if(this.form.get('univ')?.value)
    this.attrib.university= this.form.get('univ')?.value;

    this.attribChange.emit(this.attrib);

    this.form.reset();
  }

}
