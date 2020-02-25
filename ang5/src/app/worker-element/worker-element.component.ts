import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ServicesService} from '../services.service';

@Component({
  selector: 'app-worker-element',
  templateUrl: './worker-element.component.html',
  styleUrls: ['./worker-element.component.css']
})
export class WorkerElementComponent {
  editForm: FormGroup;
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  @Input() worker: { name: string, type: string, role: string, id: number, number: number};
  @Output() delWorker = new EventEmitter<{ id: number }>();
  @Output() editWorker = new EventEmitter<{ id: number, name: string, role: string, type: string, number: number }>();
  @ViewChild('del', {static: false}) workerRoleInput: ElementRef;
  constructor(private services: ServicesService) {
    this.editForm = new FormGroup({
      name: new FormControl(null, []),
      role: new FormControl(null, []),
      id: new FormControl(null, []),
      number: new FormControl(null, [])
    });
  }
  delete(id) {
    this.delWorker.emit({
      id: this.worker.id
    });
  }
  edit() {
    this.editWorker.emit({
      id: this.worker.id,
      name: this.editForm.value.name,
      role: this.editForm.value.role,
      type: this.worker.type,
      number: this.editForm.value.number,
    });
  }
}

