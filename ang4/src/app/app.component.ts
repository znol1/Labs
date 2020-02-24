import { Component } from '@angular/core';
import {element} from 'protractor';
import {worker} from 'cluster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  workerElements = []; // массив объектов, отобращаемых при помощи компонента worker
  private string = '';
  onWorkerAdded(workerData: { name: string, role: string, id: number, number: number }) {
    if (workerData.name !== '' && workerData.role !== '' && workerData.name[0] !== ' ' && workerData.role[0] !== ' ') {
      this.workerElements.push({
        name: workerData.name,
        role: workerData.role,
        type: 'сотрудник',
        id: workerData.id,
        number: workerData.number,
      });
    }
  }

  onHeadWorkerAdded(workerData: { name: string, role: string, id: number, number: number }) {
    if (workerData.name !== '' && workerData.role !== '' && workerData.name[0] !== ' ' && workerData.role[0] !== ' ') {
      this.workerElements.push({
        name: workerData.name,
        role: workerData.role,
        type: 'руководитель',
        id: workerData.id,
        number: workerData.number,
      });
    }
  }

  deleteWorker(workerData: { id: number }) {
    this.workerElements = this.workerElements.filter(t => t.id !== workerData.id);
  }

  edWorker(workerData: { name: string, id: number, role: string, type: string, number: number }) {
    if (workerData.name !== '' && workerData.role !== '' && workerData.name[0] !== ' ' && workerData.role[0] !== ' ') {
      this.workerElements.forEach(work => {
        if (work.id === workerData.id) {
          work.name = workerData.name;
          work.role = workerData.role;
          work.number = workerData.number;
        }
      });
    }
  }
}
