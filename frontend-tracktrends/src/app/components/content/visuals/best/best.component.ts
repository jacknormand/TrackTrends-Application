import { Component, inject, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EventMappingItem, eventMapping } from '../../../../shared/shared.interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-best',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './best.component.html',
  styleUrl: './best.component.css'
})
export class BestComponent {
  httpClient = inject(HttpClient);
  tableData: number[][] = [];
  events: any[] = [];
  eventMapping: EventMappingItem[] = eventMapping;

  ngOnInit(): void {
    this.makeAPICall()
  }

  makeAPICall(): void {
    const apiUrl = `${environment.apiUrl}/eventU`;

    this.httpClient.get(apiUrl).subscribe(
      (data: any) => {
        this.tableData = data;
        this.organizeEventData();
      },
      (error) => {
        console.error('API Error:', error)
      }
    );

  }

  organizeEventData(): void {

    this.tableData.forEach((event: any[]) => {
      const eventName = (eventMapping.find(item => item.dbName === event[0]) || {}).displayName;
      const school = event[1];
      const number = event[2];

      let found = false;
      for (const e of this.events) {
        if (e.name === eventName) {
          e.schools.push({ name: school, number: number });
          found = true;
          break;
        }
      }
      if (!found) {
        this.events.push({ name: eventName, schools: [{ name: school, number: number }] });
      }
    });
  }


}
