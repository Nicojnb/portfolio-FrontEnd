import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() about?: string;
  @Output() aboutChange: EventEmitter <string> = new EventEmitter;
  
  @Input() admin?: boolean;

  protected showForm: boolean = true;

  protected formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.formGroup = this.formBuilder.group({
      about: ''
    });
  }

  setValue() {
    this.formGroup.setValue({
      about : this.about
     });
  }

  ngOnChanges(): void{
    this.setValue();
  }

  ngOnInit(): void {
  }

  changeState(value: boolean): void {
    this.showForm=value;
  }

  onUpdate() {
    if(this.formGroup.get('about')?.value)
      this.about = this.formGroup.get('about')?.value;
    this.aboutChange.emit(this.about);
    this.changeState(true)
  }

  onCancel() {
    this.formGroup.reset();
    this.setValue();
    this.changeState(true);
  }

}
