import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DialogModule } from 'primeng/dialog';

import { HeaderComponent } from './components/header/header.component';
import { ChartEngineComponent } from './components/chart/chart-engine/chart-engine.component';
import { ChartPieComponent } from './components/chart/charts/chart-pie/chart-pie.component';
import { BarChartComponent } from './components/chart/charts/bar-chart/bar-chart.component';
import { ModalItemComponent } from './components/modal-item/modal-item.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ChartEngineComponent,
    ChartPieComponent,
    BarChartComponent,
    ModalItemComponent,
  ],
  imports: [CommonModule, ButtonModule, NgApexchartsModule, DialogModule],
  exports: [
    HeaderComponent,
    ChartPieComponent,
    BarChartComponent,
    ModalItemComponent,
  ],
})
export class SharedModule {}
