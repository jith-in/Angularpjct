import {  Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HighchartsService } from '../../highcharts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [HighchartsService]
})
export class IndexComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService) { }
  ngOnInit(){
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }
   myOptions = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Scope Change'
  },
  xAxis: {
      categories: ['MAT Sprint1', 'MAT Sprint2', 'MAT Sprint3', 'MAT Sprint4', 'MAT Sprint5']
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Scope Change '
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: 'gray'
          }
      }
  },
  legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
           'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
      name: 'Added Scope',
      data: [5, 3, 4, 7, 2]
  }, {
      name: 'Commited',
      data: [2, 2, 3, 2, 1]
  }, {
      name: 'Removed',
      data: [3, 4, 4, 2, 5]
  }]

  };
}
