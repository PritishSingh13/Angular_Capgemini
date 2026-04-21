import { Component } from '@angular/core';
import { ChildComponent } from '../child/child';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './parent.html'
})
export class ParentComponent {

  messageToChild = "Hello Child";

  receivedArray: string[] = [];

  getDataFromChild(data: string[]) {
    this.receivedArray = data;
  }
}
