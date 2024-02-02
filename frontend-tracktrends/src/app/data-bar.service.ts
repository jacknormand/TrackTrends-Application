import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBarService {

  // subjects for event name and data
  private chartDataSubject = new BehaviorSubject<number[][]>([]);
  chartData$ = this.chartDataSubject.asObservable();

  updateChartData(data: number[][]): void {
    
    // will never be invalid but just in case i guess call it defaultname
    this.chartDataSubject.next(data);
    

 }
}
