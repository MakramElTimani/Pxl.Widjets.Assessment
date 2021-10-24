import { Component, Input, OnInit } from '@angular/core';
import { ArtDetailsResponse } from 'src/app/interfaces/art-details-response';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-art-colors-graph',
  templateUrl: './art-colors-graph.component.html',
  styleUrls: ['./art-colors-graph.component.less']
})
export class ArtColorsGraphComponent implements OnInit {

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Color';
  showYAxisLabel = true;
  yAxisLabel = 'Percentage';

  colorScheme = {
    domain: []
  };

  @Input() artDetailsResponse: ArtDetailsResponse | undefined;
  
  options: any;
  constructor() {}

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const series = [];

    for (let i = 0; i < this.artDetailsResponse!.artObject.colors.length; i++) {
      xAxisData.push(this.artDetailsResponse!.artObject.colors[i].hex.trim());
      data1.push(this.artDetailsResponse!.artObject.colors[i].percentage);
      series.push({
        name: 'colors',
        type: 'bar',
        data: [this.artDetailsResponse!.artObject.colors[i].percentage],
        label: {
          normal: {
            show: true,
            position: 'top'
          } 
        },
        color: this.artDetailsResponse!.artObject.colors[i].hex.trim(),
      })
    }

    this.options = {
      color: xAxisData,
      xAxis: {
        data: ['colors'],
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: series,
      animationEasing: 'elasticOut',
      // animationDelayUpdate: (idx) => idx * 5,
    };
  }

}
