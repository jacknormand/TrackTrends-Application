import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private chartDataSubject = new BehaviorSubject<number[][]>([]);
  chartData$ = this.chartDataSubject.asObservable();


  updateChartData(data: number[][]): void {
    this.chartDataSubject.next(data);
 }
}
