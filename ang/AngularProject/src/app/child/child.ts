import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.html'
})
export class ChildComponent {

  @Input() dataFromParent: string = '';

  @Output() dataEvent = new EventEmitter<string[]>();

  sendData() {
    const arr = ["One", "Two", "Three"];
    this.dataEvent.emit(arr);
  }
}
