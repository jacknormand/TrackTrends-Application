import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBarService } from '../../../../data-bar.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit {
  barChart: any;
  chartData: number[][] = [];
  constructor(private dataService: DataBarService){ 
  }

  ngOnInit(): void {

    this.barChart = new Chart('bar-chart', {
      type: 'bar',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Top performances for each date',
            data: [],
            backgroundColor: 'rgba(1,1,1,1)',
            borderColor:'rgba(100,100,100,1)',
            borderWidth: 2
          },
        ]
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
      },

    });

    // make chart fill container
    this.barChart.canvas.parentNode.style.height = '100%';
    this.barChart.canvas.parentNode.style.width = '100%'; 

    this.dataService.chartData$.subscribe((data) => {
      this.chartData = data;
      console.log(this.chartData)
      this.updateChart();
    });

  }

  updateChart(): void { 

    if (this.chartData != null){

      const chartDataForBarChart = this.chartData.map(point => ({
        label: `${point[1]}, ${point[2]}`, // Format as "month, day"
        data: point[3]
      }));

      const labels = chartDataForBarChart.map(point => point.label);
      const data = chartDataForBarChart.map(point => point.data);

      this.barChart.data.labels = labels;
      this.barChart.data.datasets[0].data = data;


    }

    else {
      this.barChart.data.labels = [];
      this.barChart.data.datasets[0].data = [];
      this.barChart.data.datasets[0].label = "Invalid data, refresh";
    }

    this.barChart.update();
  }





}
