import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexLegend,
  ApexTheme,
  ApexTitleSubtitle,
  ChartComponent,
} from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-chart-pie', // TODO: mudar de chart-pie para pie-chart
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css'],
})
export class ChartPieComponent implements OnInit {
  @ViewChild('pieCanvas') pieCanvas;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  title = 'Vagas por tecnologias';
  pieChart: any;

  constructor() {
    this.chartOptions = {
      series: [15, 15, 30, 40],
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: ['Python', 'Java', 'SQL', 'ReactJs'],
      legend: {
        position: 'left',
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#187eb4',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      title: {
        text: this.title,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  ngOnInit(): void {}
}
