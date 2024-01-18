import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // subjects for event name and data
  private chartDataSubject = new BehaviorSubject<number[][]>([]);
  chartData$ = this.chartDataSubject.asObservable();
  private dbNameSubject = new BehaviorSubject<string | undefined>(undefined);
  dbName$ = this.dbNameSubject.asObservable();

  updateChartData(data: number[][], dbName?: string): void {
    // will never be invalid but just in case i guess call it defaultname
    const safeDbName = dbName ?? "DefaultName";
    this.chartDataSubject.next(data);
    this.dbNameSubject.next(safeDbName);
 }
}
