import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EventMappingItem, eventMapping } from '../../../../shared/shared.interfaces';
import { DataBarService } from '../../../../data-bar.service';
import { BarChartComponent } from '../bar-chart/bar-chart.component';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, BarChartComponent],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

  isToggleChecked = false;
  seasonToggle: boolean = false;
  isEventSelected: boolean = false;
  selectedEvent: string = 'Choose event';
  // event mapping is a table in shared that tells u if the event is a running event and also lets u know
  // what an events database name is for the API call
  eventMapping: EventMappingItem[] = eventMapping;
  httpClient = inject(HttpClient);

  constructor(private dataService: DataBarService) {}

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
    const season = this.seasonToggle ? 'indoor' : 'outdoor';
    // pull database name from selected event
    // basically just converts user facing name into database name
    const mappedEvent = (eventMapping.find(item => item.displayName === this.selectedEvent) || {}).dbName;

    // TODO: move this into a different file when deploying app
    const apiUrl = `http://localhost:8080/api/timecount/${season}/${mappedEvent}`;
    
    this.httpClient.get(apiUrl).subscribe(
      (data: any) => {
        // Process the API response data
        // show charts if valid response. uses data service
        this.dataService.updateChartData(data);
        
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
