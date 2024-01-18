import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../data.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent implements OnInit {
  lineChart:any;
  chartData: number[][] = [];
  dbName: string | undefined;
  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    // create chart here. nothing special happens here
    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Average of Top 95 Marks for Year',
            data: [],
            fill: false,
            backgroundColor: 'rgba(50, 100, 255, .25)',
            borderColor: 'rgba(250, 100, 20, 1)',
            borderWidth: 2
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
              beginAtZero: false
          }
        },
      }

    });

    // make chart fill container
    this.lineChart.canvas.parentNode.style.height = '100%';
    this.lineChart.canvas.parentNode.style.width = '100%';

    this.dataService.dbName$.subscribe(dbName => {
      this.dbName = dbName;
      // Do something with the dbName in this component
      // unused currently. might use in the future to convert seconds into minutes for longer running events
      // function to convert already made as well, just need to implement.
      // not too important rn
    });

    // Subscribe to changes in the data service
    this.dataService.chartData$.subscribe((data) => {
       // Update the chart data
       this.chartData = data;

       // Call the method to update the D3 chart (you need to implement this method)
       this.updateChart();
    });
  }

  updateChart(): void {
    // if valid for event and data is received
    // otherwise probably invalid because someone clicked for like womens decathlon or something
    if (this.chartData != null){

      // FILTER OUT 2020
      // remove this line if you want 2020
      // skew data massively
      this.chartData = this.chartData.filter(entry => entry[0] !== 2020);

      // update graph. also runs on init
      const years = this.chartData.map(point => point[0].toString());
      const values = this.chartData.map(point => point[1]);
      this.lineChart.data.labels = years;
      this.lineChart.data.datasets[0].data = values;
      this.lineChart.data.datasets[0].label = "Average of Top 95 Marks for Year";


    }
    else {
      this.lineChart.data.labels = [];
      this.lineChart.data.datasets[0].data = [];
      this.lineChart.data.datasets[0].label = "Invalid event for gender";
    }

    this.lineChart.update();

  }

}


