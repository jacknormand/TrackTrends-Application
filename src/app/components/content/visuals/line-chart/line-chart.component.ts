import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../../../../data.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  // templateUrl: './line-chart.component.html',
  template: '<svg width="500" height="300"></svg>',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {

  chartData: number[][] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Subscribe to changes in the data service
    this.dataService.chartData$.subscribe((data) => {
       // Update the chart data
       this.chartData = data;
       // Call the method to update the D3 chart (you need to implement this method)
       this.updateChart();
    });
  }

  updateChart(): void {
    


  }
}
