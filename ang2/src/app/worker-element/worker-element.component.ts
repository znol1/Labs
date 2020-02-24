import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-worker-element',
  templateUrl: './worker-element.component.html',
  styleUrls: ['./worker-element.component.css']
})
export class WorkerElementComponent {
  @Input() worker: { name: string, type: string, role: string, id: number};
  @Output() delWorker = new EventEmitter<{ id: number }>();
  @Output() editWorker = new EventEmitter<{ id: number, name: string, role: string, type: string }>();
  @ViewChild('del', {static: false}) workerRoleInput: ElementRef;
  constructor() { }
  delete(id) {
    this.delWorker.emit({
      id: this.worker.id
    });
  }
  edit(nameInput: HTMLInputElement, nameInput1: HTMLInputElement) {
    this.editWorker.emit({
      id: this.worker.id,
      name: nameInput.value,
      role: nameInput1.value,
      type: this.worker.type
    });
  }
}

