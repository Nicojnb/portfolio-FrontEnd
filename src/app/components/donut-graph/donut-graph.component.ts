import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChartType , ChartData, Chart, Point, ChartDataset } from 'chart.js';
import { Subscriber } from 'rxjs';
import { IAttitudes } from 'src/app/model/IAttitudes';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.css']
})
export class DonutGraphComponent implements OnInit {

  @Input() attitude: IAttitudes={
    id: 0,
    name: '',
    description: '',
    percent: 50,
    userId: 0
  };
/*
  protected doughnutChartDataSetDate: number[]=[10,this.attitude.percent]

  protected doughnutChartDataSet: ChartDataset[] = [{data:this.doughnutChartDataSetDate}]

  public doughnutChartLabels: string[] = [this.attitude.name];
   */
  public doughnutChartData!: ChartData<any>;

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void { 
    this.doughnutChartData= {
      labels: [this.attitude.name,'mejora posible'] , datasets: [{
        data:[this.attitude.percent,(100-this.attitude.percent)], 
        /*borderColor:["#f38b4a"],*/ 
        backgroundColor:["#86C7F3","#FFA1B5"]
      }]
    }
  }

  constructor() { }

  ngAfterContentInit(): void {
  }
}
