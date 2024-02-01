import { Component } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css'
})
export class TimeComponent {

  isToggleChecked = false;
  toggleButtonText = 'outdoor';

  onToggleChange() {
    this.isToggleChecked = !this.isToggleChecked;
    this.toggleButtonText = this.isToggleChecked ? 'indoor' : 'outdoor';
  }
}
