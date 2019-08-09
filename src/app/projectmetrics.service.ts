import { Injectable } from '@angular/core';  
import {Http} from '@angular/http';  
import 'rxjs/add/operator/map';  
 
@Injectable()  
export class ProjectMetricsService {  
  constructor(public http : Http) {  
  }  
GetSuccessrate(){  
  return this.http.get('/api/AwsomeApi/api/metrics/successrate/data').map(res =>res.json());  
}  
}