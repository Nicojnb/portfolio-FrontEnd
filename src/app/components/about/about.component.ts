import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
onUpdate() {
throw new Error('Method not implemented.');
}

  protected showForm: boolean = true;

  changeState(): void {
    this.showForm=!this.showForm;
}

  @Input() about: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
