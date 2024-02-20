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
            backgroundColor: 'rgba(251, 146, 60, 1)',
            borderColor:'rgba(23, 37, 84, 1)',
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
      
      this.updateChart();
    });

  }
  updateChart(): void { 

    if (this.chartData != null){

      const chartDataForBarChart = this.chartData.map(point => ({
        label: `${getMonthAbbreviation(point[1].toString()).label} ${point[2]}`, // Format as "month, day"
        data: point[3]
      }));

      const labels = chartDataForBarChart.map(point => point.label);
      const data = chartDataForBarChart.map(point => point.data);
      this.barChart.data.labels = labels;
      this.barChart.data.datasets[0].data = data;
      this.barChart.data.datasets[0].label = "Top 16 Performances for Each Date";
    }

    else {
      this.barChart.data.labels = [];
      this.barChart.data.datasets[0].data = [];
      this.barChart.data.datasets[0].label = "Invalid event choice for gender/season";
    }

    this.barChart.update();
  }

}


function getMonthAbbreviation(month: string): { label: string, color: string } {
  const months = [
    { label: 'Jan', color: 'rgba(255, 99, 132, 0.2)' },
    { label: 'Feb', color: 'rgba(54, 162, 235, 0.2)' },
    { label: 'Mar', color: 'rgba(255, 206, 86, 0.2)' },
    { label: 'Apr', color: 'rgba(75, 192, 192, 0.2)' },
    { label: 'May', color: 'rgba(153, 102, 255, 0.2)' },
    { label: 'Jun', color: 'rgba(255, 159, 64, 0.2)' },
    { label: 'Jul', color: 'rgba(255, 99, 132, 0.2)' },
    { label: 'Aug', color: 'rgba(54, 162, 235, 0.2)' },
    { label: 'Sep', color: 'rgba(255, 206, 86, 0.2)' },
    { label: 'Oct', color: 'rgba(75, 192, 192, 0.2)' },
    { label: 'Nov', color: 'rgba(153, 102, 255, 0.2)' },
    { label: 'Dec', color: 'rgba(255, 159, 64, 0.2)' }
  ];
  const monthIndex = parseInt(month) - 1;
  return months[monthIndex];
}