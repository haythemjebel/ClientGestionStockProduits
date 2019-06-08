import { Component, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { ChartComponent } from 'angular2-chartjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements AfterViewChecked {
@ViewChild('grapheElemnt')
private grapheElement: ChartComponent;

  @Input()
  type:string = 'line';
  @Input()
  title:string = 'Titre';
  @Input()
  data = {};
  @Input()
  options = {
    responsive: true,
    maintainAspectRatio: false
  };


  constructor() { }

  ngAfterViewChecked() {
    this.grapheElement.chart.update();
  }

}
