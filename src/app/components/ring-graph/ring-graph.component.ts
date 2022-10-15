import { Component, OnInit } from '@angular/core';
import { ISvg } from 'src/app/model/ISvg';

@Component({
  selector: 'app-ring-graph',
  templateUrl: './ring-graph.component.html',
  styleUrls: ['./ring-graph.component.css']
})
export class RingGraphComponent implements OnInit {


  initialValues: number[] = [];

  imgSvg: ISvg = {
    chartData: [],
    colors: ["#6495ED", "goldenrod", "#cd5c5c", "thistle", "lightgray"],
    cx: 80,
    cy: 80,                      
    radius: 60,
    sortedValues: [],
    strokeWidth: 30
  }

  constructor() { }

  ngOnInit(): void {
    this.sortInitialValues;
  }

  data(): number[] {
    return [230, 308, 520, 130, 200]
  }

  circumference(): number {
    return 2 * Math.PI * this.imgSvg.radius;
  }

  sortInitialValues() {
    return this.imgSvg.sortedValues = this.initialValues.sort((a,b) => b-a)
  }
/*
  dataTotal() {
    return this.imgSvg.sortedValues.reduce((acc, val) => acc + val)
  }*/

}
