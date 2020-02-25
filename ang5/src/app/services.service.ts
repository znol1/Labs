import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
export interface Worker {
  name: string;
  role: string;
  type: string;
  id: number;
  number: number;
}


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public workerElements1: Worker[] = [];

  constructor(private http: HttpClient) { }
  getObj(): Observable<Worker[]> {
    return this.http.get<Worker[]>('http://localhost:3000/workers')
      .pipe(tap(workerElements1 => this.workerElements1 = workerElements1));
  }
}
