import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {
  createForm: FormGroup;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Output() workerCreated = new EventEmitter<{ name: string, role: string, id: number, number: number }>();
  @Output() headWorkerCreated = new EventEmitter<{ name: string, role: string, id: number, number: number }>();
  @Output() createWorker = new EventEmitter<{ id: number, name: string, role: string, type: string, number: number }>();
  @ViewChild('workerRoleInput', {static: false}) workerRoleInput: ElementRef;
  i = 0;
  constructor(private services: ServicesService) {
    this.createForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
      id: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
    });
  }
  onAddWorker() {
    this.workerCreated.emit({
      name: this.createForm.value.name,
      role: this.createForm.value.role,
      id: Date.now(),
      number: this.createForm.value.number,
    });
  }

  onAddHeadWorker() {
    this.headWorkerCreated.emit({
      name: this.createForm.value.name,
      role: this.createForm.value.role,
      id: Date.now(),
      number: this.createForm.value.number,
    });
  }
  create() {
    this.createWorker.emit({
      id: this.services.workerElements1[this.i].id,
      name: this.services.workerElements1[this.i].name,
      role: this.services.workerElements1[this.i].role,
      type: this.services.workerElements1[this.i].type,
      number: this.services.workerElements1[this.i].number,
    });
    this.i += 1;
  }

}
