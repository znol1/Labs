import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent {

  @Output() workerCreated = new EventEmitter<{ name: string, role: string, id: number }>();
  @Output() headWorkerCreated = new EventEmitter<{ name: string, role: string, id: number }>();

  @ViewChild('workerRoleInput', {static: false}) workerRoleInput: ElementRef;
  onAddWorker(nameInput: HTMLInputElement) {
    this.workerCreated.emit({
      name: nameInput.value,
      role: this.workerRoleInput.nativeElement.value,
      id: Date.now()
    });
  }

  onAddHeadWorker(nameInput: HTMLInputElement) {
    this.headWorkerCreated.emit({
      name: nameInput.value,
      role: this.workerRoleInput.nativeElement.value,
      id: Date.now()
    });
  }

}
