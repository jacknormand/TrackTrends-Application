import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-average',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './average.component.html',
  styleUrl: './average.component.css'
})
export class AverageComponent implements OnInit {

  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.httpClient
      .get('http://localhost:8080/greeting')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }
}
