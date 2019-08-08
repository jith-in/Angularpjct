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
  colors: ['#3172cc','#31b7cc','#ffa600','#ccb531','#4c2734'],
  title: {
      text: 'Scope Change'
  },
  xAxis: {
      categories: ['MAT Sprint1', 'MAT Sprint2', 'MAT Sprint3', 'MAT Sprint4', 'MAT Sprint5']
  },
  yAxis: {
      min: 0,
      title: {
        //   text: 'Priority'
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
                enabled: true,
                color:  'white'
            }
         
      }
  },
  series: [{
      name: 'Low',  
      data: [0, 3, 4, 7, 0],
      
  }, {
      name: 'Highest',
      data: [0, 2, 3, 2, 0]
  }, {
      name: 'Medium',
       data: [0, 0, 4, 2, 8]
  },{
    name: 'High',
     data: [0, 4, 4, 0, 0]
},
{
    name: 'Lowest',
    data: [5, 5, 4, 2, 0]
}
]

  };
}
