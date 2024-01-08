import { Component } from '@angular/core';
import { AverageComponent } from './visuals/average/average.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [AverageComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
