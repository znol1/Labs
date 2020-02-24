import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  @ViewChild('workerRoleInput', {static: false}) workerRoleInput: ElementRef;
  constructor() {
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

}
