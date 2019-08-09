import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HighchartsService } from '../../highcharts.service';
import {ProjectMetricsService} from '../../projectmetrics.service'
import { ProjectModel } from './ProjectModel ';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [HighchartsService]
})
export class IndexComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;
  constructor(private highcharts: HighchartsService,private projectserv : ProjectMetricsService) {
    this.projectserv.GetSuccessrate().subscribe((data) => {  
      this.data = data;
      console.log(this.data)
    });

  }
  scope: string = "Y";
  velocity: string;
  types: string[];
  selectedChart: string = ''
  data : ProjectModel[]; 

  ngOnInit() {
    this.highcharts.createChart(this.chartEl.nativeElement, this.priorityDetails);
  }


  selectChangeHandler(event: any) {

    this.selectedChart = event.target.value;
    if (this.selectedChart == "Priority")
      this.highcharts.createChart(this.chartEl.nativeElement, this.priorityDetails);
    if (this.selectedChart == "Velocity") 
      this.highcharts.createChart(this.chartEl.nativeElement, this.velocityPredictability);
    if (this.selectedChart == "Accepted")
      this.highcharts.createChart(this.chartEl.nativeElement, this.acceptedCommited);
    if (this.selectedChart == "Scope") {
      this.highcharts.createChart(this.chartEl.nativeElement, this.scopeDetails);
    }
  }

  handleClick(type: string) {
    if(type == "Accepted")
    this.highcharts.createChart(this.chartEl.nativeElement, this.acceptedCommited);
    if(type == "Priority")
    this.highcharts.createChart(this.chartEl.nativeElement, this.priorityDetails);
    if(type == "Velocity")
    this.highcharts.createChart(this.chartEl.nativeElement, this.velocityPredictability);
    if(type == "Scope")
    this.highcharts.createChart(this.chartEl.nativeElement, this.scopeDetails);
  }


  

  priorityDetails = {
    chart: {
      type: 'column'
    },
    colors: ['#3172cc', '#31b7cc', '#ffa600', '#ccb531', '#4c2734'],
    title: {
      text: 'Priority',
      style: {
        fontWeight: 'bold',size:'10px'
    }
      
    },
    xAxis: {
      categories: ['MAT Sprint1', 'MAT Sprint2', 'MAT Sprint3', 'MAT Sprint4', 'MAT Sprint5']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Priority',
        
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
          color: 'white'
        }

      },
      series: {
        pointWidth: 50
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
    }, {
      name: 'High',
      data: [0, 4, 4, 0, 0]
    },
    {
      name: 'Lowest',
      data: [5, 5, 4, 2, 0]
    }
    ]

  };



  velocityPredictability = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Velocity Predictability'
    },

    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 50
      }
    },
    xAxis: [{
      categories: ['MAT Sprint1', 'MAT Sprint2', 'MAT Sprint3', 'MAT Sprint4'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        //format: '{value}°C',
        style: {
          color: "blue"
        }
      },
      title: {
        text: 'Velocity',
        style: {
          color: "green"
        }
      }
    }, { // Secondary yAxis
      title: {
        text: 'Predictable Velocity',
        style: {
          color: "Green"
        }
      },
      labels: {

        style: {
          color: "Blue"
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      //layout: 'vertical',
      align: 'left',
      x: 100,
      verticalAlign: 'top',
      y: 20,
      floating: true,
      backgroundColor:
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'Velocity',
      type: 'column',
      color: "#d28639",
      yAxis: 1,
      data: [7, 5, 13, 21],


    }, {
      name: 'Predictable Velocity',
      type: 'spline',
      color: "red",
      data: [5, 5, 13, 7],

    }]
  };


  acceptedCommited = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Accepted/Commited'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: [
        'MAT Sprint1',
        'MAT Sprint2',
        'MAT Sprint3',
        'MAT Sprint4',
      ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Accepted/Commited'
      }
    },
    
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      },
      series: {
        pointWidth: 50
      }
    },
    series: [{
      name: 'Accepted/Commited',
      color: "#d28639",
      data: [50, 75, 12, 120]

    }]
  };


  scopeDetails = {
    chart: {
      type: 'column'
    },
    colors: ['#31b7cc', '#3172cc', '#ffa600'],
    title: {
      text: 'Scope Change'
    },
    xAxis: {
      categories: ['MAT Sprint1', 'MAT Sprint2', 'MAT Sprint3']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Scope Change'
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
          color: 'white'
        }

      },
      series: {
        pointWidth: 40
      }
    },
    series: [{
      name: 'Commited Work',
      data: [0, 3, 4],

    }, {
      name: 'Added Scope',
      data: [0, 2, 3]
    }, {
      name: 'Removed Scope',
      data: [2, 0, 4]
    }

    ]

  };

}

