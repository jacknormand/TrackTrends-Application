import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  httpClient = inject(HttpClient);
  chartData: number[][] = [];

  ngOnInit(): void {
    this.makeAPICall()
  }

  makeAPICall(): void {
    const apiUrl = `${environment.apiUrl}/top100count`;

  this.httpClient.get(apiUrl).subscribe(
    (data: any) => {
       // Process the API response data
       // show charts if valid response. uses data service
       this.chartData = data;
    },
    (error) => {
       console.error('API Error:', error);
    }
 );
    

  }



}
