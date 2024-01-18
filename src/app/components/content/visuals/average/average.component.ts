import { Component, OnInit, inject } from '@angular/core';
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
// add implements OnInit for init
export class AverageComponent {

  constructor(private dataService: DataService) {}

  httpClient = inject(HttpClient);
  genderToggle: boolean = false;
  isEventSelected: boolean = false;
  selectedEvent: string = 'Choose event';
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
  // const mappedEvent = this.eventMapping[this.selectedEvent];
  const mappedEvent = (eventMapping.find(item => item.displayName === this.selectedEvent) || {}).dbName;
  const apiUrl = `http://localhost:8080/api/avgforevent/${gender}/${mappedEvent}`;

  this.httpClient.get(apiUrl).subscribe(
    (data: any) => {
       // Process the API response data
       // show charts if valid, otherwise not valid (ex: decathlon for female returns Null)
      this.dataService.updateChartData(data);
    },
    (error) => {
       console.error('API Error:', error);
    }
 );
}
}
