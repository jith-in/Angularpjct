import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { HighchartsService } from './highcharts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectMetricsService } from './projectmetrics.service';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    PagesModule,
    routing,
    ChartModule, 
    ReactiveFormsModule,
    HttpModule 
  ],
  declarations: [
    AppComponent,
  ],
  providers:    [HighchartsService,ProjectMetricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
