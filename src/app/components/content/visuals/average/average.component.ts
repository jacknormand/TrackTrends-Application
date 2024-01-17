import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from '../line-chart/line-chart.component';
import { DataService } from '../../../../data.service';

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
  // map for database
  eventMapping: { [key: string]: string } = {
    "10,000 Meters": "10000Meters",
    "100m Hurdles": "100Hurdles",
    "100 Meters": "100Meters",
    "110m Hurdles": "110Hurdles",
    "1500 Meters": "1500Meters",
    "200 Meters": "200Meters",
    "3000 Meters": "3000Meters",
    "3000m Steeplechase": "3000Steeplechase",
    "400m Hurdles": "400Hurdles",
    "400 Meters": "400Meters",
    "4x100m Relay": "4x100Relay",
    "4x400m Relay": "4x400Relay",
    "5000 Meters": "5000Meters",
    "60m Hurdles": "60Hurdles",
    "60 Meters": "60Meters",
    "800 Meters": "800Meters",
    "Decathlon": "Decathlon",
    "Discus": "Discus",
    "Distance Medley Relay": "DistanceMedleyRelay",
    "Hammer": "Hammer",
    "Heptathlon": "Heptathlon",
    "High Jump": "HighJump",
    "Javelin": "Javelin",
    "Long Jump": "LongJump",
    "Mile": "Mile",
    "Pentathlon": "Pentathlon",
    "Pole Vault": "PoleVault",
    "Shot Put": "ShotPut",
    "Triple Jump": "TripleJump",
    "Weight Throw": "WeightThrow",
 };

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
  const mappedEvent = this.eventMapping[this.selectedEvent];
  const apiUrl = `http://localhost:8080/api/avgforevent/${gender}/${mappedEvent}`;

  this.httpClient.get(apiUrl).subscribe(
    (data: any) => {
       // Process the API response data
       // show charts if valid, otherwise not valid (ex: decathlon for female returns Null)
       if (data){
        this.dataService.updateChartData(data);

       }
       // TODO: Update with other data to clear it 
    },
    (error) => {
       console.error('API Error:', error);
    }
 );
}
}
