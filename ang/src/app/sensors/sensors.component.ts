import { Component, OnInit } from '@angular/core';

export interface Sensor {
   id: number;
   online: boolean;
   name: string;
 }
@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  name = '';
  online = false;

  public sensors = [
    {id: 1, online: true, name: 'датчик 1'},
    {id: 2, online: false, name: 'датчик 2'},
    {id: 3, online: true, name: 'датчик 3'},
  ];

  remove(id: number) {
    this.sensors = this.sensors.filter(t => t.id !== id);
  }
  add(color) {
    const sensor: Sensor = {
      id: Date.now(),
      online: this.online,
      name: this.name
    };
    this.sensors.push(sensor);
  }

  constructor() { }

  ngOnInit() {
  }

}
