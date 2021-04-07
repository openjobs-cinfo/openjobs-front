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
import { SharedService } from 'src/app/modules/shared/services/shared.service';

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
  public userSkills: any;
  public percent: number[];
  public labels: string[];

  title = 'Vagas por tecnologias';
  pieChart: any;

  constructor(private sharedService: SharedService) {
    this.chartOptions = {
      series: [],
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: [],
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

  async ngOnInit() {
    const data = await this.sharedService.getSkillPercents();

    this.userSkills = data;
    if (this.userSkills) {
      this.percent = Object.values(this.userSkills);
      this.labels = Object.keys(this.userSkills);
      this.chartOptions.series = this.percent;
      this.chartOptions.labels = this.labels;
    }
  }
}
