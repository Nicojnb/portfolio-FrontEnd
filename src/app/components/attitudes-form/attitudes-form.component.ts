import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAttitudes } from 'src/app/model/IAttitudes';

@Component({
  selector: 'app-attitudes-form',
  templateUrl: './attitudes-form.component.html',
  styleUrls: ['./attitudes-form.component.css']
})
export class AttitudesFormComponent implements OnInit {

  protected form: FormGroup;

  @Input() attitude: IAttitudes={
    id: 0,
    name: '',
    description: '',
    percent: 0,
    userId: 0
  }

  @Output() attitudeChange = new EventEmitter<IAttitudes>();
  @Output() closeForm = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) { 
    this.form=formBuilder.group({
      'nombre':['', [Validators.required, Validators.maxLength(30)]],
      'descripcion':['', [Validators.required, Validators.maxLength(30)]],
      'porcentaje':['', [Validators.required, Validators.maxLength(30)]]
    })
  }

  setValue() {
    this.form.setValue({
      nombre:this.attitude.name,
      descripcion:this.attitude.description,
      porcentaje:this.attitude.percent,
     });
    //this.form.patchValue({tipo: 'Carson', titulo: 'Drew'});
  }

  ngOnInit(): void {
    
  }

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
    this.attitude.name= this.form.get('nombre')?.value;
    
    if(this.form.get('descripcion')?.value)
    this.attitude.description= this.form.get('descripcion')?.value;

    if(this.form.get('porcentaje')?.value)
    this.attitude.percent= this.form.get('porcentaje')?.value;

    this.attitudeChange.emit(this.attitude);

    this.form.reset();

  }

}
