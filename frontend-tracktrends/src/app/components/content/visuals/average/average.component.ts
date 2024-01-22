import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { DataService } from '../../../../data.service';
import { EventMappingItem, eventMapping } from '../../../../shared/shared.interfaces';

@Component({
  selector: 'app-average',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, LineChartComponent],
  templateUrl: './average.component.html',
  styleUrl: './average.component.css'
})
export class AverageComponent {

  constructor(private dataService: DataService) {}

  httpClient = inject(HttpClient);
  genderToggle: boolean = false;
  isEventSelected: boolean = false;
  selectedEvent: string = 'Choose event';
  // event mapping is a table in shared that tells u if the event is a running event and also lets u know
  // what an events database name is for the API call
  eventMapping: EventMappingItem[] = eventMapping;

  // runs to see if we can make another api call
  changeEvent(): void {
    // Check if a valid event is selected
    this.isEventSelected = this.selectedEvent != 'Choose event';
 
    // Check both conditions before making the API call
    if (this.isEventSelected) {
      this.makeAPICall();
    }
 }

 // make the call
 makeAPICall(): void {
  const gender = this.genderToggle ? 'female' : 'male';
  // pull database name from selected event
  // basically just converts user facing name into database name
  const mappedEvent = (eventMapping.find(item => item.displayName === this.selectedEvent) || {}).dbName;

  // TODO: move this into a different file when deploying app
  const apiUrl = `http://localhost:8080/api/avgforevent/${gender}/${mappedEvent}`;

  this.httpClient.get(apiUrl).subscribe(
    (data: any) => {
       // Process the API response data
       // show charts if valid response. uses data service
      this.dataService.updateChartData(data, mappedEvent);
    },
    (error) => {
       console.error('API Error:', error);
    }
 );
}
}
