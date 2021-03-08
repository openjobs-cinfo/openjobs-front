import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartEngineComponent } from './components/chart/chart-engine/chart-engine.component';
import { ChartPieComponent } from './components/chart/charts/chart-pie/chart-pie.component';
import { BarChartComponent } from './components/chart/charts/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ChartEngineComponent,
    ChartPieComponent,
    BarChartComponent,
  ],
  imports: [CommonModule, ButtonModule, NgApexchartsModule],
  exports: [HeaderComponent, ChartPieComponent, BarChartComponent],
})
export class SharedModule {}
